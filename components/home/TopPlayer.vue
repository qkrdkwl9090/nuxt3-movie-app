<script setup>
const props = defineProps({
  movie: Object,
})
const movieDetail = useMovieDetail()
const src = computed(
  () =>
    `https://www.youtube.com/embed/${props.movie.yt_trailer_code}?loop=1&playlist=${props.movie.yt_trailer_code}&autoplay=1&mute=1&controls=0&showinfo=0&disablekb=1&fs=1&modestbranding=1`,
)
const onClickDetail = () => movieDetail.show(props.movie.id)
</script>
<template>
  <div class="h-[43.75rem] overflow-hidden relative">
    <iframe
      :src="src"
      class="mt-[-8.75rem]"
      width="1920"
      height="1080"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    >
    </iframe>
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
