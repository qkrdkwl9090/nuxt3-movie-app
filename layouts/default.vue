<script setup lang="ts">
import ScrollTop from 'primevue/scrolltop'
</script>

<template>
  <div class="main__container overflow-x-hidden shrink-0">
    <Header />
    <main class="bg-black"><slot /></main>
    <ScrollTop target="parent" />
  </div>
</template>

<style lang="scss" scoped>
main {
  min-height: 100vh;
  min-height: 100vdh;
}
</style>
