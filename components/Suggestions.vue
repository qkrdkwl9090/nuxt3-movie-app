<script setup>
import { useQuery } from '@tanstack/vue-query'
const { id } = defineProps(['id'])
const movieDetail = useMovieDetail()
const requestUri = `/v2/movie_suggestions.json?movie_id=${id}`
const getMovieSuggestions = async () =>
  await useDefaultFetch(requestUri).then(({ data }) => data.movies)
const { data: movies, isSuccess } = useQuery({
  queryKey: [requestUri],
  queryFn: getMovieSuggestions,
})
</script>

<template>
  <section class="p-10" v-if="isSuccess">
    <h4 class="text-lg text-white font-bold">Suggestions</h4>
    <div
      class="mt-4 flex flex-wrap gap-12 justify-between text-white cursor-pointer"
    >
      <div
        v-for="movie of movies"
        :key="movie.id"
        @click="() => movieDetail.show(movie.id)"
      >
        <img
          class="rounded-md"
          :src="movie.medium_cover_image"
          :alt="movie.title"
        />
        <p class="mt-2">{{ movie.title }}</p>
      </div>
    </div>
  </section>
</template>
