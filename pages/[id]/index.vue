<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { IMovieResponse, IMovie } from '@/models/movie'

const route = useRoute()
const id = route.params.id

const requestUri = computed(() => `/v2/movie_details.json?movie_id=${id}`)
const getMovieDetail = async (): Promise<IMovie> => {
  const response = await useDefaultFetch(requestUri.value)
  const movieResponse: IMovieResponse = response as IMovieResponse
  return movieResponse.data.movie
}
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
        <Detail v-if="!isLoading" :movie="movie" />
        <EmptyDetail v-else />
      </section>
    </section>
  </div>
</template>
