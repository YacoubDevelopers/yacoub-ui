<template>
  <button
    class="rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/80 disabled:opacity-50"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
