<script setup lang="ts">
import * as _icons from 'lucide-vue-next'

const icons = _icons as Record<string, any>

const props = defineProps<{
  name: keyof typeof icons
}>()
</script>

<template>
  <component :is="icons[props.name]" class="h-5 w-5" v-bind="$attrs" />
</template>
