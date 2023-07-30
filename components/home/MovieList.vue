<script setup>
import { Scrollbar } from 'swiper'
const props = defineProps({
  movieList: {
    type: Object,
    required: true,
  },
})
const movieDetail = useMovieDetail()
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
            slidesPerView: 4,
          },
        }"
        spaceBetween="30"
        :modules="[Scrollbar]"
        :scrollbar="{
          hide: true,
        }"
      >
        <swiper-slide
          v-for="movie of movies"
          :key="movie.id"
          class="cursor-pointer min-w-[40px] xl:min-w-[9.375rem]"
        >
          <button @click="() => movieDetail.show(movie.id)">
            <img
              :src="movie.medium_cover_image"
              alt=""
              class="rounded-md w-full"
            />
            <p class="mt-2 text-left">{{ movie.title }}</p>
          </button>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
