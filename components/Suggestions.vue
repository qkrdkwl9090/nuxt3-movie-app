<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { IMovie, IMoviesResponse } from '@/models/movies'
const { id } = defineProps(['id'])
const requestUri = `/v2/movie_suggestions.json?movie_id=${id}`
async function getMovieSuggestions(): Promise<IMovie[]> {
  const response = await useDefaultFetch(requestUri)
  const res: IMoviesResponse = response as IMoviesResponse

  return res.data.movies
}
const { data: movies, isSuccess } = useQuery<IMovie[]>({
  queryKey: [requestUri],
  queryFn: getMovieSuggestions,
})
</script>

<template>
  <section v-if="isSuccess">
    <h4 class="text-lg text-white font-bold">Suggestions</h4>
    <div class="mt-4 grid grid-cols-2 xl:grid-cols-3 gap-12 text-white">
      <MovieContainer
        v-for="movie of movies"
        :key="movie.id"
        :id="movie.id"
        :src="movie.medium_cover_image"
        :title="movie.title"
      />
    </div>
  </section>
</template>
