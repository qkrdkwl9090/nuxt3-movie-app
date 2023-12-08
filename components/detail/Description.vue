<script setup lang="ts">
const { description } = defineProps({
  description: {
    type: String,
    required: true,
  },
})
const summary = computed(() => description.slice(0, 200))
const isHide = ref(true)
const needHide = ref(false)
onMounted(() => {
  needHide.value = description.length > 500
})
</script>
<template>
  <div>
    <div v-if="isHide && needHide">
      <p>{{ summary + '...' }}</p>
    </div>
    <p v-else>
      {{ description }}
    </p>
    <div class="flex justify-end">
      <Button
        v-if="needHide"
        :onClick="() => (isHide = !isHide)"
        :label="isHide ? 'More' : 'Hide'"
        text
        size="small"
        severity="secondary"
      />
    </div>
  </div>
</template>
