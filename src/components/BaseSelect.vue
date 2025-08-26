<script setup lang="ts">
const model = defineModel<string>()

defineProps<{
  options: { label: string; value: string }[]
}>()
</script>

<template>
  <select
    v-model="model"
    class="w-full rounded-lg border bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
    v-bind="$attrs"
  >
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>
