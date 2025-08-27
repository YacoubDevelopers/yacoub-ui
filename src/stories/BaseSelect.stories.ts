import type { Meta, StoryObj } from "@storybook/vue3";
import BaseSelect from "../components/BaseSelect.vue";

const meta: Meta<typeof BaseSelect> = {
  title: "Base/BaseSelect",
  component: BaseSelect,
  tags: ["autodocs"],
  args: {
    modelValue: null,
    label: "Categoría",
    placeholder: "Seleccionar...",
    options: [
      { value: "1", label: "Opción 1" },
      { value: "2", label: "Opción 2" },
      { value: "3", label: "Opción 3" },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof BaseSelect>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: "Debes elegir una opción",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Searchable: Story = {
  args: {
    searchable: true,
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { BaseSelect },
    setup() {
      return { args };
    },
    template: `
      <div class="space-y-4">
        <BaseSelect v-bind="args" size="sm" label="Chico" />
        <BaseSelect v-bind="args" size="md" label="Mediano" />
        <BaseSelect v-bind="args" size="lg" label="Grande" />
      </div>
    `,
  }),
};
