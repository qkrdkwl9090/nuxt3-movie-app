<script setup lang="ts">
import { reactive } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { IMoviesResponse, IMovie } from '@/models/movies'

const requestUri =
  '/v2/list_movies.json?minimum_rating=8.5&sort_by=rating&limit=50'
const moviesByGenre = reactive<Record<string, IMovie[]>>({})

async function convertMovieData(): Promise<IMovie> {
  const response = await useDefaultFetch(requestUri)
  const res: IMoviesResponse = response as IMoviesResponse

  const genreCounts: Record<string, number> = res.data.movies.reduce<
    Record<string, number>
  >((acc, movie) => {
    movie.genres.forEach((genre) => {
      acc[genre] = (acc[genre] || 0) + 1
    })
    return acc
  }, {})

  const popularGenres = Object.keys(genreCounts).filter(
    (genre) => genreCounts[genre] >= 6,
  )

  popularGenres.forEach((genre) => {
    moviesByGenre[genre] = res.data.movies.filter((movie) =>
      movie.genres.includes(genre),
    )
  })

  return res.data.movies[0]
}

const { data: bsetMovie, isSuccess } = useQuery<IMovie>({
  queryKey: [requestUri],
  queryFn: convertMovieData,
})
</script>

<template>
  <section>
    <HomePoster v-if="isSuccess" :movie="bsetMovie" />
    <section class="p-6 xl:p-16">
      <HomeMovieList v-if="isSuccess" :movieList="moviesByGenre" />
      <HomeMovieListEmpty v-else class="mt-8" />
    </section>
  </section>
</template>
