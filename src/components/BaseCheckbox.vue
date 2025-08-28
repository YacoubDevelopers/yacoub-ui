<script setup lang="ts">
import { computed } from 'vue'
import { Check } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    modelValue: boolean | undefined
    label?: string
    error?: string
    id?: string
    required?: boolean
    labelPosition?: 'top' | 'right'
    disabled?: boolean
  }>(),
  {
    modelValue: false,
    labelPosition: 'right',
    disabled: false,
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const inputId = computed(
  () => props.id || `checkbox-${Math.random().toString(36).substring(2, 9)}`
)
const isLabelTop = computed(() => props.labelPosition === 'top')

function onChange(e: Event) {
  if (!props.disabled) {
    emit('update:modelValue', (e.target as HTMLInputElement).checked)
  }
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

    <div
      :class="[
        'flex',
        isLabelTop ? 'flex-row' : 'items-center gap-2',
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      ]"
    >
      <!-- Checkbox custom -->
      <label class="relative inline-flex items-center cursor-pointer">
        <input
          :id="inputId"
          type="checkbox"
          :checked="modelValue"
          :disabled="disabled"
          @change="onChange"
          class="peer absolute h-5 w-5 opacity-0 cursor-pointer"
        />
        <div
          class="flex h-5 w-5 items-center justify-center rounded border-2 border-gray-300 
                transition duration-200 ease-in-out
                peer-focus:ring-2 peer-focus:ring-primary/40
                peer-hover:border-primary
                peer-checked:border-primary peer-checked:bg-primary"
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
