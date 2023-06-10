<script setup>
const currentScroll = ref(0)
const isScrolling = computed(() => currentScroll.value > 0)
const scrollEvent = useThrottle(() => {
  currentScroll.value = window.scrollY
}, 100)
onMounted(() => {
  document.addEventListener('scroll', scrollEvent)
})
onBeforeUnmount(() => {
  container.removeEventListener('scroll', scrollEvent)
})
</script>
<template>
  <header
    class="w-screen | shrink-0 fixed z-10 transition-[background] duration-300"
    :class="isScrolling ? 'bg-black' : 'bg-transparent'"
  >
    <section class="py-4 flex items-center justify-between px-6 xl:px-8">
      <div class="flex items-center">
        <p
          class="mr-6 font-bold text-2xl text-red-600 cursor-pointer"
          @click="() => navigateTo('/')"
        >
          Reelify
        </p>
      </div>
      <i class="pi pi-search text-white"></i>
    </section>
  </header>
</template>
