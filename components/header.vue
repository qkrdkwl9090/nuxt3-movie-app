<script setup>
import OverlayPanel from 'primevue/overlaypanel'
const currentScroll = ref(0)
let container = null
const op = ref(null)
const isOpen = ref(false)
const scrollEvent = useThrottle(() => {
  currentScroll.value = container.scrollTop
  console.log(currentScroll.value)
}, 100)
onMounted(() => {
  if (!process.client) return
  container = document.querySelector('.main__container > main')
  document.addEventListener('scroll', scrollEvent)
})
onBeforeUnmount(() => {
  if (!process.client) return
  container.removeEventListener('scroll', scrollEvent)
})
const onClick = (e) => {
  isOpen.value = !isOpen.value
  op.value.toggle(e)
}
</script>
<template>
  <header
    class="w-screen | shrink-0 fixed z-10 transition-[background] duration-300"
    :class="currentScroll > 0 ? 'bg-black' : 'bg-transparent'"
  >
    <section class="py-4 flex items-center justify-between px-6 xl:px-8">
      <div class="flex items-center">
        <p class="mr-6 font-bold text-2xl text-red-600 cursor-pointer">
          Reelify
        </p>
        <div
          class="gap-4 text-sm [&>p]:cursor-pointer text-white hidden xl:flex"
        >
          <p>Home</p>
          <p>Series</p>
          <p>Movies</p>
        </div>
        <div
          class="text-sm text-white items-cente gap-1 flex xl:hidden"
          @click="onClick"
        >
          <p>Menu</p>
          <i
            class="pi p-1"
            :class="isOpen ? 'pi-chevron-up' : 'pi-chevron-down'"
            style="font-size: 12px"
          />
          <OverlayPanel ref="op" id="menu__panel">
            <div class="[&>p:hover]:bg-gray-900">
              <p
                class="text-white text-center py-2 px-8"
                @click="() => navigateTo('/home')"
              >
                Home
              </p>
              <p
                class="text-white text-center py-2 px-8"
                @click="() => navigateTo('/series')"
              >
                Series
              </p>
              <p
                class="text-white text-center py-2 px-8"
                @click="() => navigateTo('/movies')"
              >
                Movies
              </p>
            </div>
          </OverlayPanel>
        </div>
      </div>
      <i class="pi pi-search text-white"></i>
    </section>
  </header>
</template>
<style lang="scss">
#menu__panel {
  background: transparent;
  &:before,
  &:after {
    display: none;
  }
  & > .p-overlaypanel-content {
    font-size: 14px;
    padding: 0 !important;
    background: black;
    opacity: 0.8;
  }
}
</style>
