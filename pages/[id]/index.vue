<script setup>
import { useQuery } from '@tanstack/vue-query'
import Tag from 'primevue/tag'
const route = useRoute()
const id = route.params.id

const requestUri = computed(() => `/v2/movie_details.json?movie_id=${id}`)
const getMovieDetail = async () =>
  await useDefaultFetch(requestUri.value).then(({ data }) => data.movie)
const { data: movie, isLoading } = useQuery({
  queryKey: [id],
  queryFn: getMovieDetail,
})
</script>
<template>
  <div
    :style="{ 'background-image': `url(${movie?.background_image})` }"
    class="bg-no-repeat bg-cover bg-center bg-fixed w-full xl:py-40"
  >
    <section class="w-full xl:w-[50rem] mx-auto bg-slate-800 xl:rounded-xl">
      <section class="px-10 py-20 xl:p-10 text-white gap-8">
        <template v-if="!isLoading">
          <div class="flex gap-10">
            <div class="flex-1">
              <h3 class="font-bold text-lg">
                {{ movie?.title }}
                <span class="text-gray-500">{{ ` (${movie?.year})` }}</span>
              </h3>
              <p class="mt-4">
                {{ movie?.description_full }}
              </p>
              <div class="mt-4 flex gap-2">
                <Tag
                  v-for="genre of movie?.genres"
                  :key="genre"
                  :value="genre"
                />
              </div>
              <div
                class="mt-4 grid grid-cols-[6.25rem_1fr] text-gray-400 gap-1"
              >
                <p>Runtime</p>
                <p>{{ movie?.runtime }} Minute</p>
                <p>Language</p>
                <p>{{ movie?.language.toUpperCase() }}</p>
                <p>Rating</p>
                <p>{{ movie?.rating }} / 10</p>
                <p>Likes</p>
                <div>
                  <i class="pi pi-heart mr-2" style="font-size: 0.8125rem" />{{
                    movie?.like_count
                  }}
                </div>
              </div>
            </div>
            <img
              class="rounded-md !w-[10rem] xl:w-auto h-min"
              :src="movie?.medium_cover_image"
            />
          </div>
          <DetailTrailer
            v-if="movie?.yt_trailer_code"
            class="mt-20"
            :src="movie.yt_trailer_code"
          />
          <Suggestions v-if="movie?.id" class="mt-20" :id="movie?.id" />
        </template>
        <EmptyDetail v-else />
      </section>
    </section>
  </div>
</template>
