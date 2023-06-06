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
      <h3 class="text-2xl">{{ genre }}</h3>
      <swiper
        class="mt-4"
        slidesPerView="7"
        spaceBetween="30"
        :modules="[Scrollbar]"
        :scrollbar="{
          hide: true,
        }"
      >
        <swiper-slide v-for="movie of movies" :key="movie.id">
          <img
            :src="movie.medium_cover_image"
            alt=""
            class="min-w-[9.375rem] rounded-md"
          />
          <p class="mt-2">{{ movie.title }}</p>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
