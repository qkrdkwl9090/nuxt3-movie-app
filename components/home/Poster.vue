<script setup>
const props = defineProps({
  movie: Object,
})
const movieDetail = useMovieDetail()
const onClickDetail = () => movieDetail.show(props.movie.id)
</script>
<template>
  <div class="h-[43.75rem] overflow-hidden relative">
    <img :src="movie.large_cover_image" alt="" class="w-full" />
    <div class="absolute bottom-16 left-16">
      <p class="text-white font-bold text-4xl mb-5">{{ movie.title }}</p>
      <Button
        class="w-[6.875rem]"
        label="Info"
        severity="secondary"
        @click="onClickDetail"
      />
    </div>
  </div>
</template>
