<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <NuxtLink :href="`/${id}`" class="w-[2.5rem] xl:w-[12rem] cursor-pointer">
    <img :src="src" alt="" class="rounded-md w-full" />
    <p class="mt-2 text-left text-white text-sm xl:text-lg">{{ title }}</p>
  </NuxtLink>
</template>
