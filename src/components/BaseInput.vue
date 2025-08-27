<template>
  <div>
    <!-- Label -->
    <label v-if="label" class="mb-1 block text-sm font-medium text-gray-700">
      <span v-if="required" class="text-red-600">*</span> {{ label }}
    </label>

    <!-- Input -->
    <input
      v-bind="$attrs"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="[
        'w-full appearance-none rounded-lg border placeholder-gray-400 shadow-sm transition duration-200 outline-none',
        sizeClass,
        error
          ? 'border-[#f44336]'
          : 'focus:border-primary focus:ring-primary border-gray-300 focus:ring-1',
        disabled ? 'cursor-not-allowed bg-gray-100 text-gray-500' : 'text-gray-700',
      ]"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />

    <!-- Error -->
    <p v-if="error" class="mt-1 flex items-center gap-1 text-sm text-[#f44336]">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * Input de texto reutilizable con label, estados de error y tamaños.
 */
const props = withDefaults(
  defineProps<{
    /** Valor del input */
    modelValue: string | number | null | undefined
    /** Label opcional que se muestra arriba */
    label?: string
    /** Mensaje de error */
    error?: string
    /** Tipo de input (text, email, password, number, etc.) */
    type?: string
    /** Muestra un asterisco rojo en el label */
    required?: boolean
    /** Tamaño del input */
    size?: 'sm' | 'md' | 'lg'
    /** Texto que se muestra cuando el input está vacío */
    placeholder?: string
    /** Deshabilita el input */
    disabled?: boolean
  }>(),
  {
    type: 'text',
    size: 'md',
    disabled: false,
  }
)

defineEmits<{
  (e: 'update:modelValue', value: string | number | null): void
}>()

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-1.5 text-sm'
    case 'lg':
      return 'px-4 py-4 text-base'
    default: // md
      return 'px-4 py-3 text-sm'
  }
})
</script>
