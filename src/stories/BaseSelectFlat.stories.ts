import type { Meta, StoryObj } from "@storybook/vue3";
import BaseSelectFlat from "../components/BaseSelectFlat.vue";

const meta: Meta<typeof BaseSelectFlat> = {
  title: "Base/BaseSelectFlat",
  component: BaseSelectFlat,
  tags: ["autodocs"],
  argTypes: {
    modelValue: { control: "text" },
    label: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text" },
    searchable: { control: "boolean" },
    options: { control: "object" },
  },
};
export default meta;

type Story = StoryObj<typeof BaseSelectFlat>;

// 📌 Default
export const Default: Story = {
  args: {
    modelValue: null,
    label: "Selecciona una opción",
    placeholder: "Elige...",
    options: [
      { value: "1", label: "Opción 1" },
      { value: "2", label: "Opción 2" },
      { value: "3", label: "Opción 3" },
    ],
  },
  render: (args) => ({
    components: { BaseSelectFlat },
    setup() {
      return { args };
    },
    template: `
      <div class="max-w-xs">
        <BaseSelectFlat v-model="args.modelValue" v-bind="args" />
        <p class="mt-2 text-sm text-gray-600">Valor: {{ args.modelValue }}</p>
      </div>
    `,
  }),
};

// 📌 Con búsqueda
export const Searchable: Story = {
  args: {
    modelValue: null,
    label: "Buscar opción",
    searchable: true,
    options: [
      { value: "1", label: "Argentina" },
      { value: "2", label: "Bolivia" },
      { value: "3", label: "Chile" },
      { value: "4", label: "Paraguay" },
      { value: "5", label: "Uruguay" },
    ],
  },
  render: (args) => ({
    components: { BaseSelectFlat },
    setup: () => ({ args }),
    template: `
      <div class="max-w-xs">
        <BaseSelectFlat v-model="args.modelValue" v-bind="args" />
      </div>
    `,
  }),
};

// 📌 Con error
export const WithError: Story = {
  args: {
    modelValue: null,
    label: "Con error",
    error: "Este campo es obligatorio",
    options: [
      { value: "1", label: "Rojo" },
      { value: "2", label: "Verde" },
      { value: "3", label: "Azul" },
    ],
  },
  render: (args) => ({
    components: { BaseSelectFlat },
    setup: () => ({ args }),
    template: `
      <div class="max-w-xs">
        <BaseSelectFlat v-model="args.modelValue" v-bind="args" />
      </div>
    `,
  }),
};

// 📌 Muchas opciones
export const ManyOptions: Story = {
  args: {
    modelValue: null,
    label: "Lista larga",
    searchable: true,
    options: Array.from({ length: 50 }, (_, i) => ({
      value: String(i + 1),
      label: `Opción ${i + 1}`,
    })),
  },
  render: (args) => ({
    components: { BaseSelectFlat },
    setup: () => ({ args }),
    template: `
      <div class="max-w-xs">
        <BaseSelectFlat v-model="args.modelValue" v-bind="args" />
      </div>
    `,
  }),
};
