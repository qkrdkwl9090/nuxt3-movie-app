<script setup>
import { Scrollbar } from 'swiper'
const props = defineProps({
  movieList: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <section>
    <div
      v-for="(movies, genre) in movieList"
      :key="genre"
      class="text-white [&+&]:mt-4"
    >
      <h3 class="text-2xl font-bold">{{ genre }}</h3>
      <swiper
        class="mt-4"
        slidesPerView="4"
        :breakpoints="{
          1024: {
            slidesPerView: 7,
          },
          640: {
            slidesPerView: 2,
          },
        }"
        spaceBetween="30"
        :modules="[Scrollbar]"
        :scrollbar="{
          hide: true,
        }"
      >
        <swiper-slide v-for="movie of movies" :key="movie.id">
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
