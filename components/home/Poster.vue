<script setup lang="ts">
import { IMovie } from '@/models/movies'

const { movie } = defineProps<{
  movie: IMovie
}>()
</script>
<template>
  <div class="xl:h-[43.75rem] overflow-hidden relative">
    <img :src="movie.large_cover_image" alt="" class="w-full" />
    <div class="absolute bottom-6 left-6 xl:bottom-16 xl:left-16">
      <p
        id="best_movie_title"
        class="text-white font-bold text-2xl xl:text-4xl mb-5"
      >
        {{ movie.title }}
      </p>
      <Button
        class="w-[6.875rem]"
        label="Info"
        severity="secondary"
        @click="navigateTo(`/${movie.id}`)"
      />
    </div>
  </div>
</template>
