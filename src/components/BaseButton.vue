<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition focus:ring-2 focus:ring-offset-1 focus:outline-none',
      sizeClass,
      variantClass,
      disabled || loading
        ? 'cursor-not-allowed opacity-60'
        : 'hover:opacity-90 active:opacity-100',
    ]"
  >
    <!-- Spinner cuando está en loading -->
    <svg
      v-if="loading"
      class="h-4 w-4 animate-spin text-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>

    <!-- Texto dinámico -->
    <slot v-if="!loading" />
    <slot v-else name="loading">Procesando...</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    type?: "button" | "submit" | "reset";
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "secondary" | "danger" | "outline";
    disabled?: boolean;
    loading?: boolean;
  }>(),
  {
    type: "button",
    size: "md",
    variant: "primary",
    disabled: false,
    loading: false,
  }
);

const sizeClass = computed(() => {
  switch (props.size) {
    case "sm":
      return "px-3 py-1.5 text-sm";
    case "lg":
      return "px-4 py-4 text-base";
    default: // md
      return "px-4 py-3 text-sm";
  }
});

const variantClass = computed(() => {
  switch (props.variant) {
    case "secondary":
      return "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200";
    case "danger":
      return "bg-red-500 text-white hover:bg-red-600";
    case "outline":
      return "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50";
    default: // primary
      return "bg-primary text-white hover:bg-primary/90";
  }
});
</script>
