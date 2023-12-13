<script setup lang="ts">
import { Scrollbar } from 'swiper'
import { IMovie } from '@/models/movies'
const { moviesByGenre } = defineProps<{
  moviesByGenre: Record<string, IMovie[]>
}>()
</script>
<template>
  <section>
    <div
      v-for="(movies, genre) in moviesByGenre"
      :key="genre"
      class="text-white [&+&]:mt-4"
    >
      <h3 class="text-xl xl:text-2xl font-bold">{{ genre }}</h3>
      <swiper
        class="mt-4"
        :slidesPerView="4"
        :breakpoints="{
          1024: {
            slidesPerView: 7,
          },
          640: {
            slidesPerView: 4,
          },
          320: {
            slidesPerView: 2,
          },
        }"
        spaceBetween="30"
        :modules="[Scrollbar]"
        :scrollbar="{
          hide: true,
        }"
      >
        <swiper-slide v-for="movie of movies" :key="movie.id" id="movie_list">
          <MovieContainer
            :id="movie.id"
            :src="movie.medium_cover_image"
            :title="movie.title"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
