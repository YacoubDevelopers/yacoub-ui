import type { Meta, StoryObj } from "@storybook/vue3";
import BaseButton from "../components/BaseButton.vue";

const meta: Meta<typeof BaseButton> = {
  title: "Base/BaseButton",
  component: BaseButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "outline"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

// 📌 Variantes
export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    disabled: false,
    loading: false,
    type: "button",
  },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `<BaseButton v-bind="args">Primary</BaseButton>`,
  }),
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
  },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `<BaseButton v-bind="args">Secondary</BaseButton>`,
  }),
};

export const Danger: Story = {
  args: {
    variant: "danger",
    size: "md",
  },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `<BaseButton v-bind="args">Eliminar</BaseButton>`,
  }),
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "md",
  },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `<BaseButton v-bind="args">Outline</BaseButton>`,
  }),
};

// 📌 Estados especiales
export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "md",
    disabled: true,
  },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `<BaseButton v-bind="args">Deshabilitado</BaseButton>`,
  }),
};

export const Loading: Story = {
  args: {
    variant: "primary",
    size: "md",
    loading: true,
  },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `<BaseButton v-bind="args">Guardar</BaseButton>`,
  }),
};

// 📌 Tamaños
export const Sizes: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div class="flex gap-4 items-center">
        <BaseButton size="sm">Small</BaseButton>
        <BaseButton size="md">Medium</BaseButton>
        <BaseButton size="lg">Large</BaseButton>
      </div>
    `,
  }),
};
