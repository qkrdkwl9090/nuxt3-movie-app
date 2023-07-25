<script setup>
import { useQuery } from '@tanstack/vue-query'
import Tag from 'primevue/tag'
import Dialog from 'primevue/dialog'
const movieDetail = useMovieDetail()

const requestUri = computed(
  () => `/v2/movie_details.json?movie_id=${movieDetail.id}`,
)
const getMovieDetail = async () =>
  await useDefaultFetch(requestUri.value).then(({ data }) => data.movie)
const movieInfo = computed(() => (movieDetail.visible ? movie : {}))
const {
  data: movie,
  isLoading,
  isRefetching,
  refetch,
} = useQuery({
  queryKey: [requestUri.value],
  queryFn: getMovieDetail,
  enabled: movieDetail.visible,
})
watch(
  () => movieDetail.visible,
  (visible) => {
    if (!visible) return
    refetch()
  },
)
watch(
  () => movieDetail.id,
  (id) => {
    if (!id) return
    refetch()
    const content = document.querySelector('.p-dialog-content')
    content && content.scroll(0, 0)
  },
)
const src = computed(
  () =>
    `https://www.youtube.com/embed/${movie?.value.yt_trailer_code}?controls=0&showinfo=0&disablekb=1&fs=1&modestbranding=1`,
)
</script>
<template>
  <Dialog
    :visible="movieDetail.visible"
    modal
    :draggable="false"
    :closable="false"
    closeOnEscape
    header="Header"
    class="relative"
    :style="{ width: '50vw' }"
  >
    <template #header>
      <iframe
        v-if="movie?.yt_trailer_code && !isRefetching"
        :src="src"
        class="w-full h-[25rem] rounded-tl-md rounded-tr-md"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      >
      </iframe>
      <div
        class="absolute top-6 right-6 bg-black w-8 h-8 rounded-full hover:bg-gray-500 flex items-center justify-center"
      >
        <i
          class="pi pi-times cursor-pointer text-white"
          @click="() => movieDetail.close()"
        />
      </div>
    </template>
    <section class="p-10 text-white flex justify-between gap-8">
      <template v-if="!isLoading && !isRefetching">
        <div class="w-3/4">
          <h3 class="font-bold text-lg">
            {{ movie?.title }}
            <span class="text-gray-500">{{ ` (${movie?.year})` }}</span>
          </h3>
          <p class="mt-4">
            {{ movie?.description_full }}
          </p>
          <div class="mt-4 flex gap-2">
            <Tag v-for="genre of movie?.genres" :key="genre" :value="genre" />
          </div>
          <div class="mt-4 grid grid-cols-[6.25rem_1fr] text-gray-400 gap-1">
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
        <img class="rounded-md h-min w-1/4" :src="movie?.medium_cover_image"
      /></template>
      <template v-else>
        <section>
          <Skeleton width="18.75rem" />
          <div class="mt-4 flex flex-col gap-4">
            <Skeleton width="9.375rem" />
            <Skeleton width="9.375rem" />
            <Skeleton width="9.375rem" />
          </div>
        </section>
        <Skeleton width="12.5rem" height="18.75rem" />
      </template>
    </section>
    <Suggestions v-if="movie?.id && !isRefetching" :id="movie?.id" />
  </Dialog>
</template>
