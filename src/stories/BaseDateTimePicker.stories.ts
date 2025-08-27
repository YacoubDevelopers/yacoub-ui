import type { Meta, StoryObj } from "@storybook/vue3";
import BaseDateTimePicker from "../components/BaseDateTimePicker.vue";

const meta: Meta<typeof BaseDateTimePicker> = {
  title: "Base/BaseDateTimePicker",
  component: BaseDateTimePicker,
  tags: ["autodocs"],
  argTypes: {
    modelValue: { control: "text" },
    label: { control: "text" },
    error: { control: "text" },
    required: { control: "boolean" },
    isDisabled: { control: "boolean" },
    minDate: { control: "date" },
  },
};
export default meta;

type Story = StoryObj<typeof BaseDateTimePicker>;

// 📌 Default
export const Default: Story = {
  args: {
    modelValue: null,
    label: "Fecha y hora",
  },
  render: (args) => ({
    components: { BaseDateTimePicker },
    setup() {
      return { args };
    },
    template: `
      <div class="max-w-sm">
        <BaseDateTimePicker v-model="args.modelValue" v-bind="args" />
        <p class="mt-2 text-sm text-gray-600">
          Valor: {{ args.modelValue }}
        </p>
      </div>
    `,
  }),
};

// 📌 Con error
export const WithError: Story = {
  args: {
    modelValue: null,
    label: "Fecha límite",
    error: "Este campo es obligatorio",
    required: true,
  },
  render: (args) => ({
    components: { BaseDateTimePicker },
    setup: () => ({ args }),
    template: `
      <div class="max-w-sm">
        <BaseDateTimePicker v-model="args.modelValue" v-bind="args" />
      </div>
    `,
  }),
};

// 📌 Deshabilitado
export const Disabled: Story = {
  args: {
    modelValue: null,
    label: "Fecha deshabilitada",
    isDisabled: true,
  },
  render: (args) => ({
    components: { BaseDateTimePicker },
    setup: () => ({ args }),
    template: `
      <div class="max-w-sm">
        <BaseDateTimePicker v-model="args.modelValue" v-bind="args" />
      </div>
    `,
  }),
};

// 📌 Con minDate
export const WithMinDate: Story = {
  args: {
    modelValue: null,
    label: "Fecha mínima (hoy)",
    minDate: new Date(),
  },
  render: (args) => ({
    components: { BaseDateTimePicker },
    setup: () => ({ args }),
    template: `
      <div class="max-w-sm">
        <BaseDateTimePicker v-model="args.modelValue" v-bind="args" />
      </div>
    `,
  }),
};
