<!-- BaseCheckbox.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { Check } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    label?: string
    error?: string
    id?: string
    required?: boolean
    labelPosition?: 'top' | 'right'
  }>(),
  {
    modelValue: false,
    labelPosition: 'right',
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const inputId = computed(() => props.id || `checkbox-${Math.random().toString(36).substring(2, 9)}`)
const isLabelTop = computed(() => props.labelPosition === 'top')

function onChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).checked)
}
</script>

<template>
  <div>
    <!-- Label arriba -->
    <label
      v-if="label && isLabelTop"
      :for="inputId"
      class="mb-1 block text-sm font-medium text-gray-700"
    >
      <span v-if="required" class="text-red-600">*</span>
      {{ label }}
    </label>

    <div :class="['flex', isLabelTop ? 'flex-row' : 'items-center gap-2']">
      <!-- Checkbox -->
      <label class="relative h-5 w-5 cursor-pointer">
        <input
          :id="inputId"
          type="checkbox"
          :checked="modelValue"
          class="peer sr-only"
          @change="onChange"
        />
        <div
          class="border-primary peer-checked:bg-primary peer-checked:border-primary flex h-full w-full items-center justify-center rounded-sm border-2 transition"
        >
          <Check v-if="modelValue" class="h-3 w-3 text-white" />
        </div>
      </label>

      <!-- Label a la derecha -->
      <label
        v-if="label && !isLabelTop"
        :for="inputId"
        class="cursor-pointer text-sm font-medium text-gray-700"
      >
        <span v-if="required" class="text-red-600">*</span>
        {{ label }}
      </label>

      <!-- Slot extra -->
      <slot />
    </div>

    <!-- Mensaje de error -->
    <p v-if="error" class="mt-1 text-sm text-[#f44336]">
      {{ error }}
    </p>
  </div>
</template>
