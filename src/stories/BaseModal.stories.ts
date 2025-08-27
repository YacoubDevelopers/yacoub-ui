import type { Meta, StoryObj } from "@storybook/vue3";
import BaseModal from "../components/BaseModal.vue";
import BaseButton from "../components/BaseButton.vue";

const meta: Meta<typeof BaseModal> = {
  title: "Base/BaseModal",
  component: BaseModal,
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "select" },
      options: [
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
      ],
    },
    tall: { control: "boolean" },
    autoTall: { control: "boolean" },
    modelValue: { control: "boolean" },
    title: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof BaseModal>;

// 📌 Default
export const Default: Story = {
  args: {
    modelValue: true,
    title: "Título del Modal",
    width: "lg",
  },
  render: (args) => ({
    components: { BaseModal },
    setup() {
      return { args };
    },
    template: `
      <BaseModal v-model="args.modelValue" v-bind="args">
        <p class="text-gray-600">
          Este es un modal básico con contenido por defecto.
        </p>
      </BaseModal>
    `,
  }),
};

// 📌 Con footer
export const WithFooter: Story = {
  args: {
    modelValue: true,
    title: "Modal con footer",
  },
  render: (args) => ({
    components: { BaseModal, BaseButton },
    setup() {
      return { args };
    },
    template: `
      <BaseModal v-model="args.modelValue" v-bind="args">
        <p class="text-gray-600 mb-4">
          Aquí podés poner acciones en el footer.
        </p>
        <template #footer>
          <div class="flex justify-end gap-2">
            <BaseButton variant="secondary">Cancelar</BaseButton>
            <BaseButton variant="primary">Guardar</BaseButton>
          </div>
        </template>
      </BaseModal>
    `,
  }),
};

// 📌 Header custom
export const CustomHeader: Story = {
  args: {
    modelValue: true,
  },
  render: (args) => ({
    components: { BaseModal },
    setup: () => ({ args }),
    template: `
      <BaseModal v-model="args.modelValue" v-bind="args">
        <template #header>
          <div class="flex items-center gap-2">
            <span class="text-primary text-xl">⚡</span>
            <h2 class="text-lg font-bold text-primary">Header personalizado</h2>
          </div>
        </template>
        <p>Podés sobrescribir el header con el slot <code>header</code>.</p>
      </BaseModal>
    `,
  }),
};

// 📌 Tall forzado
export const Tall: Story = {
  args: {
    modelValue: true,
    title: "Modal alto (tall)",
    tall: true,
  },
  render: (args) => ({
    components: { BaseModal },
    setup: () => ({ args }),
    template: `
      <BaseModal v-model="args.modelValue" v-bind="args">
        <div class="space-y-4">
          <p v-for="i in 40" :key="i">Fila {{ i }}</p>
        </div>
      </BaseModal>
    `,
  }),
};

// 📌 AutoTall (se adapta al contenido)
export const AutoTall: Story = {
  args: {
    modelValue: true,
    title: "Modal autoTall",
    autoTall: true,
  },
  render: (args) => ({
    components: { BaseModal },
    setup: () => ({ args }),
    template: `
      <BaseModal v-model="args.modelValue" v-bind="args">
        <div class="space-y-4">
          <p v-for="i in 20" :key="i">Contenido dinámico {{ i }}</p>
        </div>
      </BaseModal>
    `,
  }),
};

// 📌 Distintos anchos
export const Widths: Story = {
  args: {
    modelValue: true,
  },
  render: (args) => ({
    components: { BaseModal },
    setup: () => ({ args }),
    template: `
      <div class="space-y-6">
        <BaseModal v-model="args.modelValue" v-bind="{...args, width: 'sm', title: 'Modal sm'}">
          <p>Modal pequeño (sm)</p>
        </BaseModal>
        <BaseModal v-model="args.modelValue" v-bind="{...args, width: 'lg', title: 'Modal lg'}">
          <p>Modal mediano (lg)</p>
        </BaseModal>
        <BaseModal v-model="args.modelValue" v-bind="{...args, width: '3xl', title: 'Modal 3xl'}">
          <p>Modal ancho (3xl)</p>
        </BaseModal>
      </div>
    `,
  }),
};
