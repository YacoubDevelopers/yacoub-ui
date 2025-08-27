<template>
  <div class="-mb-6">
    <!-- Label -->
    <label v-if="label" class="mb-1 block text-sm font-medium text-gray-800">
      <span v-if="required" class="text-red-600">*</span> {{ label }}
    </label>

    <Listbox v-model="internalValue" :disabled="disabled" v-slot="{ open }">
      <div class="relative">
        <!-- Botón -->
        <ListboxButton as="template">
          <div
            ref="buttonRef"
            @click="!disabled && updatePosition()"
            :aria-required="required"
            :class="[
              'focus:ring-primary focus:border-primary relative w-full cursor-default rounded-lg border bg-white text-left shadow-sm transition duration-200 focus:ring-2 focus:outline-none',
              sizeClass,
              error ? 'border-red-400' : 'border-gray-300',
              disabled
                ? 'cursor-not-allowed border-gray-200 bg-gray-200 text-gray-400'
                : 'text-gray-700',
            ]"
          >
            <span class="block truncate">
              {{ selectedOption?.label || placeholder || 'Seleccionar opción' }}
            </span>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
            >
              <ChevronDown class="h-4 w-4" />
            </span>
          </div>
        </ListboxButton>

        <!-- Opciones flotantes -->
        <teleport to="body">
          <ListboxOptions
            v-if="open && !disabled"
            :style="{
              position: 'absolute',
              top: `${position.top}px`,
              left: `${position.left}px`,
              width: `${position.width}px`,
            }"
            class="z-50 mt-1 max-h-60 divide-y divide-gray-100 overflow-auto rounded-lg border border-gray-300 bg-white text-sm shadow-lg ring-1 ring-gray-200 focus:outline-none"
          >
            <!-- Buscador -->
            <div v-if="searchable" class="border-b border-gray-200">
              <input
                v-model="search"
                type="text"
                :disabled="disabled"
                placeholder="Buscar..."
                class="focus:border-primary w-full px-3 py-2 text-sm outline-none disabled:bg-gray-100 disabled:text-gray-400"
              />
            </div>

            <!-- Opciones -->
            <ListboxOption
              v-for="option in filteredOptions"
              :key="option.value"
              :value="option.value"
              :disabled="disabled"
              :class="[
                'relative cursor-pointer px-4 py-2.5 transition select-none first:rounded-t-lg last:rounded-b-lg',
                disabled
                  ? 'cursor-not-allowed bg-gray-50 text-gray-400'
                  : 'hover:bg-primary/10 text-gray-800',
              ]"
            >
              <span
                :class="[
                  selectedOption?.value === option.value && !disabled
                    ? 'text-primary font-medium'
                    : '',
                  'block truncate',
                ]"
              >
                {{ option.label }}
              </span>
              <span
                v-if="selectedOption?.value === option.value && !disabled"
                class="text-primary absolute inset-y-0 right-4 flex items-center"
              >
                <Check class="h-4 w-4" />
              </span>
            </ListboxOption>

            <!-- Sin resultados -->
            <div
              v-if="filteredOptions.length === 0"
              class="px-4 py-3 text-center text-sm text-gray-500 italic"
            >
              No se encontraron opciones.
            </div>
          </ListboxOptions>
        </teleport>
      </div>
    </Listbox>

    <!-- Error -->
    <p
      class="mt-1 flex min-h-[1.25rem] items-center gap-1 text-xs text-red-400 transition-opacity duration-200"
      :class="{ 'opacity-100': !!error, 'opacity-0': !error }"
    >
      <AlertCircle class="h-4 w-4 text-red-400" />
      <span>{{ error || '‎' }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { ChevronDown, Check, AlertCircle } from 'lucide-vue-next'
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: string | number | null | undefined
    label?: string
    placeholder?: string
    options: { value: string | number; label: string }[]
    error?: string
    searchable?: boolean
    required?: boolean
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
  }>(),
  {
    size: 'md',
    disabled: false,
    searchable: false,
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | null | undefined): void
}>()

const internalValue = ref(props.modelValue)
const search = ref('')
const buttonRef = ref<HTMLDivElement | null>(null)

watch(
  () => props.modelValue,
  val => (internalValue.value = val)
)
watch(internalValue, val => emit('update:modelValue', val))

const selectedOption = computed(() => props.options.find(opt => opt.value === internalValue.value))

const filteredOptions = computed(() => {
  if (!props.searchable || !search.value.trim()) return props.options
  return props.options.filter(opt =>
    opt.label.toLowerCase().includes(search.value.trim().toLowerCase())
  )
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-1.5 text-sm'
    case 'lg':
      return 'px-4 py-4 text-base'
    default:
      return 'px-4 py-3 text-sm'
  }
})

// 📌 Posición del dropdown
const position = ref({ top: 0, left: 0, width: 0 })

function updatePosition() {
  if (buttonRef.value) {
    const rect = buttonRef.value.getBoundingClientRect()
    position.value = {
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
    }
  }
}

onMounted(() => {
  window.addEventListener('resize', updatePosition)
  window.addEventListener('scroll', updatePosition, true)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updatePosition)
  window.removeEventListener('scroll', updatePosition, true)
})
</script>
