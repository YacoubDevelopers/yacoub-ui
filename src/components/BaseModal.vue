<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
        tabindex="-1"
        role="dialog"
        aria-modal="true"
        @click.self="onBackdropClick"
      >
        <!-- Contenedor -->
        <div
          ref="modalRef"
          :class="[
            // Mobile: full screen; Desktop: centered card
            'flex w-full h-screen sm:h-auto sm:w-auto max-h-screen sm:max-h-[90vh] flex-col bg-white shadow-xl transform transition-all duration-200 sm:rounded-xl sm:my-8 overflow-hidden rounded-2xl',
            widthClass,
          ]"
        >
          <!-- Header -->
          <header
            v-if="title || $slots.header"
            class="sticky top-0 z-10 flex shrink-0 items-start justify-between border-b border-gray-200 bg-white p-4 rounded-none sm:rounded-t-xl"
          >
            <slot name="header">
              <h2 v-if="title" class="text-lg font-semibold text-gray-900">
                {{ title }}
              </h2>
            </slot>
            <button
              class="text-xl leading-none text-gray-500 hover:text-gray-800 focus:outline-none"
              aria-label="Cerrar"
              @click="close"
            >
              ×
            </button>
          </header>

          <!-- Contenido scrolleable -->
          <section class="flex-1 min-h-0 overflow-y-auto px-4 sm:px-6 py-4">
            <slot />
          </section>

          <!-- Footer -->
          <footer
            v-if="$slots.footer || confirm"
            class="sticky bottom-0 z-10 shrink-0 border-t border-gray-200 bg-white p-4 rounded-none sm:rounded-b-xl"
          >
            <slot name="footer">
              <div v-if="confirm" class="flex items-center justify-end gap-3">
                <BaseButton variant="outline" @click="onCancel">{{ cancelText }}</BaseButton>
                <BaseButton :variant="destructive ? 'danger' : 'primary'" @click="onConfirm">{{ confirmText }}</BaseButton>
              </div>
            </slot>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
  
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onBeforeUnmount } from "vue"
import BaseButton from "./BaseButton.vue"

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    title?: string
    width?:
      | "sm" | "md" | "lg" | "xl"
      | "2xl" | "3xl" | "4xl" | "5xl"
      | "6xl" | "7xl"
    confirm?: boolean
    confirmText?: string
    cancelText?: string
    destructive?: boolean
    closeOnBackdrop?: boolean
    closeOnEsc?: boolean
  }>(),
  {
    width: "lg",
    confirm: false,
    confirmText: "Confirmar",
    cancelText: "Cancelar",
    destructive: false,
    closeOnBackdrop: true,
    closeOnEsc: true,
  }
)

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void
  (e: "confirm"): void
  (e: "cancel"): void
}>()

const close = () => emit("update:modelValue", false)

const onConfirm = () => {
  emit("confirm")
  close()
}

const onCancel = () => {
  emit("cancel")
  close()
}

const onBackdropClick = () => {
  if (props.closeOnBackdrop) close()
}

const widthMap: Record<string, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
}
// Apply width only on sm+ to keep mobile full-width
const widthClass = `sm:${widthMap[props.width]}`

const modalRef = ref<HTMLElement | null>(null)
let lastFocused: HTMLElement | null = null

// Focus trap
const trapFocus = (e: KeyboardEvent) => {
  if (e.key !== "Tab" || !modalRef.value) return
  const focusables = modalRef.value.querySelectorAll<HTMLElement>(
    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
  )
  if (!focusables.length) return
  const first = focusables[0]
  const last = focusables[focusables.length - 1]
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

// Cerrar con ESC
const handleEsc = (e: KeyboardEvent) => {
  if (e.key === "Escape" && props.closeOnEsc) close()
}

watch(
  () => props.modelValue,
  async (open) => {
    if (open) {
      lastFocused = document.activeElement as HTMLElement
      document.body.classList.add("overflow-hidden")
      await nextTick()
      modalRef.value?.focus()
      window.addEventListener("keydown", trapFocus)
      window.addEventListener("keydown", handleEsc)
    } else {
      document.body.classList.remove("overflow-hidden")
      window.removeEventListener("keydown", trapFocus)
      window.removeEventListener("keydown", handleEsc)
      lastFocused?.focus()
    }
  }
)

onBeforeUnmount(() => {
  window.removeEventListener("keydown", trapFocus)
  window.removeEventListener("keydown", handleEsc)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
