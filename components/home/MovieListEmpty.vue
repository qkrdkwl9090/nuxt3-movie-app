<template>
  <section>
    <Skeleton width="12.5rem" height="2rem" />
    <div class="mt-4">
      <div class="flex gap-[30px]">
        <Skeleton
          v-for="i of 7"
          :key="i"
          width="14.5rem"
          height="18.75rem"
          class="block"
        />
      </div>
    </div>
  </section>
</template>
