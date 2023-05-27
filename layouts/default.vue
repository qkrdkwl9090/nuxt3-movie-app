<script setup>
import ScrollTop from 'primevue/scrolltop'
</script>

<template>
  <div class="h-screen | overflow-x-hidden">
    <Header />
    <div
      class="main__container with-header | w-screen overflow-x-hidden shrink-0"
    >
      <main><slot /></main>
      <ScrollTop target="parent" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$header-height: 80px;
$footer-height: 100px;
.main__container {
  overflow-y: overlay;
  &.with-header {
    margin-top: $header-height;
    height: calc(100vh - #{$header-height});
    height: calc(100dvh - #{$header-height});
  }
}
main {
  min-height: calc(100vh - #{$header-height} - #{$footer-height});
  min-height: calc(100dvh - #{$header-height} - #{$footer-height});
}
</style>
