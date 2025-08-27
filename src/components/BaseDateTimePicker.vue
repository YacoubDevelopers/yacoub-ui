<template>
  <div ref="pickerRef" class="relative w-full">
    <!-- Label -->
    <label v-if="label" class="mb-1 block text-sm font-medium text-gray-800">
      <span v-if="required" class="text-red-600">*</span> {{ label }}
    </label>

    <!-- Input -->
    <div class="relative w-full">
      <input
        type="text"
        :value="displayValue"
        readonly
        :class="[
          'w-full appearance-none rounded-lg border px-4 py-3 text-sm placeholder-gray-400 shadow-sm transition duration-200 outline-none',
          'pr-10',
          error ? 'border-[#f44336]' : 'border-gray-300',
          isDisabled
            ? 'cursor-not-allowed bg-gray-100 text-gray-500'
            : 'cursor-pointer text-gray-700',
        ]"
        @click="!isDisabled && (isOpen = !isOpen)"
      />
      <ChevronDown
        class="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-gray-400"
      />
    </div>

    <!-- DateTime picker desplegable -->
    <div
      v-if="isOpen"
      class="absolute z-50 mt-2 w-full rounded-xl border border-gray-300 bg-white shadow-lg"
    >
      <div class="p-4">
        <!-- Header -->
        <div class="mb-2 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <ChevronLeft
              class="hover:text-primary h-4 w-4 cursor-pointer text-gray-600"
              @click="prevMonth"
            />
            <span class="text-sm font-medium text-gray-800 capitalize">
              {{ currentMonthName }}
            </span>
            <ChevronRight
              class="hover:text-primary h-4 w-4 cursor-pointer text-gray-600"
              @click="nextMonth"
            />
          </div>
          <span class="rounded-md border border-gray-300 px-2 py-0.5 text-xs text-gray-700">
            {{ currentYear }}
          </span>
        </div>

        <!-- Días semana -->
        <div class="mb-1 grid grid-cols-7 text-center text-xs font-medium text-gray-500">
          <span v-for="d in weekDays" :key="d">{{ d }}</span>
        </div>

        <!-- Calendario -->
        <div class="grid grid-cols-7 gap-y-1 text-sm">
          <button
            v-for="day in days"
            :key="day.date.toISOString()"
            :disabled="isBeforeMinDate(day.date)"
            :class="[
              'flex h-8 w-8 items-center justify-center rounded-full',
              isBeforeMinDate(day.date)
                ? 'cursor-not-allowed text-gray-300'
                : isSameDate(day.date, selectedDate)
                  ? 'bg-primary text-white'
                  : day.isCurrentMonth
                    ? 'text-gray-800 hover:bg-gray-100'
                    : 'text-gray-400 hover:bg-gray-100',
            ]"
            @click="selectDate(day.date)"
          >
            {{ day.date.getDate() }}
          </button>
        </div>

        <!-- Hora -->
        <div class="mt-4 mb-3 flex items-center justify-center gap-2">
          <BaseSelect v-model="selectedHour" :options="hourOptions" class="w-14" />
          <span class="font-medium text-gray-700">:</span>
          <BaseSelect v-model="selectedMinute" :options="minuteOptions" class="w-14" />
          <BaseSelect v-model="selectedPeriod" :options="periodOptions" class="w-16" />
        </div>

        <!-- Botones -->
        <div class="mt-2 flex justify-between gap-2">
          <BaseButton variant="secondary" size="sm" class="w-full" @click="cancel">
            Cancelar
          </BaseButton>
          <BaseButton variant="primary" size="sm" class="w-full" @click="apply">
            Aplicar
          </BaseButton>
        </div>
      </div>
    </div>

    <!-- Error -->
    <p v-if="error" class="mt-1 text-sm text-[#f44336]">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-vue-next'
import BaseSelect from './BaseSelectFlat.vue'
import BaseButton from './BaseButton.vue'
const emit = defineEmits<{
  (e: 'update:modelValue', v: string | null): void
}>()

const props = defineProps<{
  modelValue: string | null
  label?: string
  error?: string
  required?: boolean
  minDate?: Date
  isDisabled?: boolean
}>()

const isOpen = ref(false)
const selectedDate = ref(props.modelValue ? new Date(props.modelValue) : new Date())
const currentMonth = ref(selectedDate.value.getMonth())
const currentYear = ref(selectedDate.value.getFullYear())
const selectedHour = ref(selectedDate.value.getHours() % 12 || 12)
const selectedMinute = ref(selectedDate.value.getMinutes())
const selectedPeriod = ref(selectedDate.value.getHours() >= 12 ? 'PM' : 'AM')

// Label mostrado en input
const displayValue = computed(() => {
  if (!props.modelValue) return 'Seleccionar fecha y hora'
  const date = new Date(props.modelValue)
  return date.toLocaleString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
})

// Nombre mes y días
const currentMonthName = computed(() =>
  new Date(currentYear.value, currentMonth.value).toLocaleString('es-AR', {
    month: 'long',
  })
)
const weekDays = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do']

// Generar días calendario
const days = computed(() => {
  const list = []
  const firstDay = new Date(currentYear.value, currentMonth.value, 1)
  const start = (firstDay.getDay() + 6) % 7 // lunes inicio
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - start)

  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate)
    date.setDate(date.getDate() + i)
    list.push({
      date,
      isCurrentMonth: date.getMonth() === currentMonth.value,
    })
  }
  return list
})

function isSameDate(d1: Date, d2: Date) {
  return (
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
  )
}
function isBeforeMinDate(date: Date) {
  if (!props.minDate) return false
  const clean = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  const min = new Date(
    props.minDate.getFullYear(),
    props.minDate.getMonth(),
    props.minDate.getDate()
  )
  return clean < min
}
function selectDate(date: Date) {
  if (!isBeforeMinDate(date)) {
    selectedDate.value = new Date(date)
  }
}
function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else currentMonth.value--
}
function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else currentMonth.value++
}

function apply() {
  const date = new Date(selectedDate.value)
  const hour =
    selectedPeriod.value === 'PM' && selectedHour.value !== 12
      ? selectedHour.value + 12
      : selectedPeriod.value === 'AM' && selectedHour.value === 12
        ? 0
        : selectedHour.value
  date.setHours(hour)
  date.setMinutes(selectedMinute.value)
  date.setSeconds(0)
  emit('update:modelValue', date.toISOString())
  isOpen.value = false
}
function cancel() {
  isOpen.value = false
}

// Sincronizar con v-model externo
watch(
  () => props.modelValue,
  val => {
    if (val) {
      const d = new Date(val)
      selectedDate.value = d
      currentMonth.value = d.getMonth()
      currentYear.value = d.getFullYear()
      selectedHour.value = d.getHours() % 12 || 12
      selectedMinute.value = d.getMinutes()
      selectedPeriod.value = d.getHours() >= 12 ? 'PM' : 'AM'
    }
  }
)

// click outside
const pickerRef = ref<HTMLElement | null>(null)
function handleClickOutside(event: MouseEvent) {
  if (pickerRef.value && !pickerRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}
onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))

// Opciones selects
const hourOptions = Array.from({ length: 12 }, (_, i) => ({
  label: String(i + 1),
  value: i + 1,
}))
const minuteOptions = Array.from({ length: 60 }, (_, i) => ({
  label: i.toString().padStart(2, '0'),
  value: i,
}))
const periodOptions = [
  { label: 'AM', value: 'AM' },
  { label: 'PM', value: 'PM' },
]
</script>
