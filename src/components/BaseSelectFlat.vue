<template>
  <div>
    <!-- Label -->
    <label v-if="label" class="mb-1 block text-sm font-medium text-gray-700">
      {{ label }}
    </label>

    <Listbox v-model="internalValue">
      <div class="relative">
        <!-- Botón -->
        <ListboxButton
          class="flex w-14 items-center justify-between rounded-md border border-gray-300 px-2 py-1 text-left text-sm text-gray-700"
        >
          <span class="truncate">
            {{ selectedOption?.label || placeholder || 'Seleccionar' }}
          </span>
          <ChevronDown class="h-4 w-4 shrink-0 text-gray-400" />
        </ListboxButton>

        <!-- Opciones -->
        <ListboxOptions
          class="absolute z-40 mt-1 max-h-48 max-w-screen-sm min-w-max overflow-y-auto rounded-md border border-gray-200 bg-white text-sm shadow-md focus:outline-none"
        >
          <!-- Buscador -->
          <input
            v-if="searchable"
            v-model="search"
            type="text"
            placeholder="Buscar..."
            class="focus:border-yacoub-orange w-full border-b border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none"
          />

          <!-- Opciones -->
          <ListboxOption
            v-for="option in filteredOptions"
            :key="option.value"
            :value="option.value"
            class="hover:bg-yacoub-orange/10 relative cursor-pointer px-3 py-2 transition select-none"
          >
            <span
              :class="[
                selectedOption?.value === option.value
                  ? 'text-yacoub-orange font-medium'
                  : 'text-gray-800',
                'block truncate',
              ]"
            >
              {{ option.label }}
            </span>

            <span
              v-if="selectedOption?.value === option.value"
              class="text-yacoub-orange absolute inset-y-0 right-3 flex items-center"
            >
              ✓
            </span>
          </ListboxOption>

          <!-- Sin resultados -->
          <div
            v-if="filteredOptions.length === 0"
            class="px-3 py-2 text-center text-sm text-gray-500 italic"
          >
            No se encontraron opciones.
          </div>
        </ListboxOptions>
      </div>
    </Listbox>

    <!-- Error -->
    <p v-if="error" class="mt-1 text-sm text-[#f44336]">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { ChevronDown } from 'lucide-vue-next'
import { ref, computed, watch } from 'vue'

const props = defineProps<{
  modelValue: string | number | null
  label?: string
  placeholder?: string
  options: { value: string | number; label: string }[]
  error?: string
  searchable?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | null): void
}>()

const internalValue = ref(props.modelValue)
const search = ref('')

watch(
  () => props.modelValue,
  val => {
    internalValue.value = val
  }
)

watch(internalValue, val => {
  emit('update:modelValue', val)
})

const selectedOption = computed(() => props.options.find(opt => opt.value === internalValue.value))

const filteredOptions = computed(() => {
  if (!props.searchable || !search.value.trim()) return props.options
  return props.options.filter(opt =>
    opt.label.toLowerCase().includes(search.value.trim().toLowerCase())
  )
})
</script>
