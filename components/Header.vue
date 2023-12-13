<script setup>
import { useQuery } from '@tanstack/vue-query'
import Sidebar from 'primevue/sidebar'
import InputText from 'primevue/inputtext'

const visible = ref(false)
const value = ref('')
const currentScroll = ref(0)
const isScrolling = computed(() => currentScroll.value > 0)
const scrollEvent = useThrottle(() => {
  currentScroll.value = window.scrollY
}, 100)
onMounted(() => {
  window.addEventListener('scroll', scrollEvent)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollEvent)
})

const requestUri = computed(
  () =>
    `/v2/list_movies.json?query_term=${value.value}&sort_by=rating&limit=20`,
)
const getMovieList = async () =>
  await useDefaultFetch(requestUri.value).then((res) => {
    return res.data.movies
  })

const {
  data: movies,
  isFetching,
  refetch,
} = useQuery({
  queryKey: [requestUri],
  queryFn: getMovieList,
})
const onInput = () => {
  refetch()
}
</script>
<template>
  <header
    class="w-screen | shrink-0 fixed z-10 transition-[background] duration-300"
    :class="isScrolling ? 'bg-black' : 'bg-transparent'"
  >
    <section class="py-4 flex items-center justify-between px-6 xl:px-8">
      <div class="flex items-center">
        <NuxtLink
          id="logo"
          class="mr-6 font-bold text-2xl text-red-600 cursor-pointer"
          to="/"
        >
          Reelify
        </NuxtLink>
      </div>
      <button @click="() => (visible = true)">
        <i class="pi pi-search text-white"></i>
      </button>
    </section>
  </header>
  <Sidebar v-model:visible="visible" position="full">
    <template #header>
      <section class="flex items-center">
        <NuxtLink
          class="mr-6 font-bold text-2xl text-red-600 cursor-pointer"
          to="/"
        >
          Reelify
        </NuxtLink>

        <InputText
          id="search_input"
          type="text"
          v-model="value"
          class="w-full"
          @input="onInput"
          placeholder=" Movie Title/IMDb Code, Actor Name/IMDb Code, Director Name/IMDb Code"
        />
      </section>
    </template>

    <section class="p-2">
      <Skeleton v-if="isFetching" width="300" />
      <div v-else>
        <h3 class="font-bold text-lg">Result</h3>
        <section class="mt-2">
          <p v-if="!movies?.length">Not found</p>
          <div v-else id="search_result" class="flex gap-8 flex-wrap">
            <MovieContainer
              @click="() => (visible = false)"
              v-for="movie of movies"
              :key="movie.id"
              :id="movie.id"
              :src="movie.medium_cover_image"
              :title="movie.title"
            />
          </div>
        </section>
      </div>
    </section>
  </Sidebar>
</template>
