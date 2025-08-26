<script setup lang="ts">
const model = defineModel<string>()

const props = defineProps<{ placeholder?: string }>()
</script>

<template>
  <textarea
    v-model="model"
    :placeholder="props.placeholder"
    class="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
    v-bind="$attrs"
  />
</template>
