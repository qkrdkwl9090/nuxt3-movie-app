<script setup>
import { useQuery } from '@tanstack/vue-query'

const moviesByGenre = reactive({})
const requestUri =
  '/v2/list_movies.json?minimum_rating=8.5&sort_by=rating&limit=50'
const getMovieList = async () =>
  await useDefaultFetch(requestUri).then((res) => {
    let genreCounts = {}

    res.data.movies.forEach((movie) => {
      movie.genres.forEach((genre) => {
        if (genreCounts[genre]) {
          genreCounts[genre]++
        } else {
          genreCounts[genre] = 1
        }
      })
    })

    let popularGenres = Object.keys(genreCounts).filter(
      (genre) => genreCounts[genre] >= 6,
    )

    popularGenres.forEach((genre) => {
      moviesByGenre[genre] = res.data.movies.filter((movie) =>
        movie.genres.includes(genre),
      )
    })
    return res.data.movies
  })

const { data: movies, isSuccess } = useQuery({
  queryKey: [requestUri],
  queryFn: getMovieList,
})
</script>
<template>
  <section>
    <HomeTopPlayer v-if="isSuccess" :movie="movies[0]" />
    <section class="pt-16 pb-16 px-16">
      <HomeMovieList v-if="isSuccess" :movieList="moviesByGenre" />
      <HomeMovieListEmpty v-else />
    </section>
    <MovieDetail />
  </section>
</template>
