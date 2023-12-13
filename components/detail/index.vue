<script setup lang="ts">
import { IMovie } from '~/models/movie'
import Tag from 'primevue/tag'

const { movie } = defineProps<{
  movie: IMovie
}>()
</script>

<template>
  <div class="flex gap-10">
    <div class="flex-1">
      <h3 id="movie_title" class="font-bold text-lg">
        {{ movie?.title }}
        <span class="text-gray-500">{{ ` (${movie?.year})` }}</span>
      </h3>
      <DetailDescription class="mt-4" :description="movie?.description_full" />
      <div class="mt-4 flex gap-2">
        <Tag v-for="genre of movie?.genres" :key="genre" :value="genre" />
      </div>
      <div class="mt-4 grid grid-cols-[6.25rem_1fr] text-gray-400 gap-1">
        <p>Runtime</p>
        <p>{{ movie?.runtime }} Minute</p>
        <p>Language</p>
        <p>{{ movie?.language.toUpperCase() }}</p>
        <p>Rating</p>
        <p>{{ movie?.rating }} / 10</p>
        <p>Likes</p>
        <div>
          <i class="pi pi-heart mr-2" style="font-size: 0.8125rem" />{{
            movie?.like_count
          }}
        </div>
      </div>
    </div>
    <img
      class="rounded-md !w-[10rem] xl:w-auto h-min"
      :src="movie?.medium_cover_image"
    />
  </div>
  <DetailTrailer
    v-if="movie?.yt_trailer_code"
    class="mt-20"
    :src="movie.yt_trailer_code"
  />
  <Suggestions v-if="movie?.id" class="mt-20" :id="movie?.id" />
</template>
