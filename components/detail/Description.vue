<script setup lang="ts">
const { description } = defineProps({
  description: {
    type: String,
    required: true,
  },
})
const summary = computed(() => description.slice(0, 200))
const isHidden = ref(true)
const isNeedHidden = ref(false)
onMounted(() => {
  isNeedHidden.value = description.length > 500
})
</script>
<template>
  <div>
    <div v-if="isHidden && isNeedHidden">
      <p>{{ summary + '...' }}</p>
    </div>
    <p v-else>
      {{ description }}
    </p>
    <div class="flex justify-end">
      <Button
        v-if="isNeedHidden"
        :onClick="() => (isHidden = !isHidden)"
        :label="isHidden ? 'More' : 'Hide'"
        text
        size="small"
        severity="secondary"
      />
    </div>
  </div>
</template>
