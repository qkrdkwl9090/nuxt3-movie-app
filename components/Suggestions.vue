<script setup>
import { useQuery } from '@tanstack/vue-query'
const { id } = defineProps(['id'])
const requestUri = `/v2/movie_suggestions.json?movie_id=${id}`
const getMovieSuggestions = async () =>
  await useDefaultFetch(requestUri).then(({ data }) => data.movies)
const { data: movies, isSuccess } = useQuery({
  queryKey: [requestUri],
  queryFn: getMovieSuggestions,
})
</script>

<template>
  <section v-if="isSuccess">
    <h4 class="text-lg text-white font-bold">Suggestions</h4>
    <div class="mt-4 grid grid-cols-2 xl:grid-cols-3 gap-12 text-white">
      <NuxtLink v-for="movie of movies" :key="movie.id" :href="`/${movie.id}`">
        <img
          class="rounded-md w-full"
          :src="movie.medium_cover_image"
          :alt="movie.title"
        />
        <p class="mt-2 text-left">{{ movie.title }}</p>
      </NuxtLink>
    </div>
  </section>
</template>
