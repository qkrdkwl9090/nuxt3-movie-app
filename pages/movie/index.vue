<script setup>
import { useQuery } from '@tanstack/vue-query'

const requestUri = '/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year'
const getMovieList = async () =>
  await useFetch(requestUri).then((data) => {
    console.log(data)
    return data
  })

const { data, isSuccess } = useQuery({
  queryKey: [requestUri],
  queryFn: getMovieList,
})
</script>
<template>
  <section>
    <!-- <img :src="" alt="">  -->
  </section>
</template>
