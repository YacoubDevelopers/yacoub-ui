<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm"
        tabindex="0"
        role="dialog"
        aria-modal="true"
        @click.self="close"
      >
        <!-- Contenedor -->
        <div
          ref="modalRef"
          :class="[
            'flex w-full flex-col rounded-xl bg-white shadow-xl transform transition-all duration-200',
            isTall ? [widthClass, 'h-screen max-h-screen'] : widthClass,
          ]"
        >
          <!-- Scroll interno -->
          <div class="flex h-full flex-col overflow-y-auto">
            <!-- Header -->
            <header
              v-if="title || $slots.header"
              class="flex items-start justify-between border-b border-gray-200 bg-white p-4 rounded-t-xl"
            >
              <slot name="header">
                <h2 v-if="title" class="text-lg font-semibold text-gray-800">
                  {{ title }}
                </h2>
              </slot>
              <button
                class="text-xl leading-none text-gray-500 hover:text-gray-800"
                aria-label="Cerrar"
                @click="close"
              >
                ×
              </button>
            </header>

            <!-- Contenido -->
            <section
              ref="contentRef"
              :class="[
                isTall
                  ? 'flex-1 overflow-y-auto px-6 py-4'
                  : 'max-h-[70vh] overflow-y-auto px-6 py-4',
              ]"
            >
              <slot />
            </section>

            <!-- Footer -->
            <footer
              v-if="$slots.footer"
              class="shrink-0 border-t border-gray-200 bg-white p-4 rounded-b-xl"
            >
              <slot name="footer" />
            </footer>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    title?: string;
    width?:
      | "sm"
      | "md"
      | "lg"
      | "xl"
      | "2xl"
      | "3xl"
      | "4xl"
      | "5xl"
      | "6xl"
      | "7xl";
    tall?: boolean;
    autoTall?: boolean;
  }>(),
  {
    width: "lg",
    tall: false,
    autoTall: false,
  },
);

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const close = () => emit("update:modelValue", false);

// map de widths → tailwind
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
};

const widthClass = widthMap[props.width];

// refs
const contentRef = ref<HTMLElement | null>(null);
const modalRef = ref<HTMLElement | null>(null);
const isTall = ref(false);

let lastFocused: HTMLElement | null = null;

// chequea altura de contenido
const checkHeight = () => {
  if (props.tall) {
    isTall.value = true;
    return;
  }
  if (props.autoTall && contentRef.value) {
    const h = contentRef.value.scrollHeight;
    isTall.value = h > window.innerHeight * 0.7;
  } else {
    isTall.value = false;
  }
};

// focus trap básico
const trapFocus = (e: KeyboardEvent) => {
  if (e.key !== "Tab" || !modalRef.value) return;

  const focusables = modalRef.value.querySelectorAll<HTMLElement>(
    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
  );
  if (focusables.length === 0) return;

  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
};

// cerrar con ESC (global)
const handleEsc = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    close();
  }
};

// watch apertura/cierre
watch(
  () => props.modelValue,
  async (open) => {
    if (open) {
      lastFocused = document.activeElement as HTMLElement;
      document.body.classList.add("overflow-hidden"); // bloquea scroll
      await nextTick();
      checkHeight();
      modalRef.value?.focus();
      window.addEventListener("keydown", trapFocus);
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", trapFocus);
      window.removeEventListener("keydown", handleEsc);
      lastFocused?.focus(); // devuelve foco
    }
  },
);

onMounted(() => {
  window.addEventListener("resize", checkHeight);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", checkHeight);
  window.removeEventListener("keydown", trapFocus);
  window.removeEventListener("keydown", handleEsc);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
