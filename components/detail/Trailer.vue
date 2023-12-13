<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
})
const src = computed(
  () =>
    `https://www.youtube.com/embed/${props.src}?controls=0&showinfo=0&disablekb=1&fs=1&modestbranding=1`,
)
</script>

<template>
  <iframe
    :src="src"
    class="w-full aspect-video rounded-xl"
    frameborder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  />
</template>
