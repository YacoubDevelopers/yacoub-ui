import type { Meta, StoryObj } from '@storybook/vue3'
import BaseInput from '../components/BaseInput.vue'

const meta: Meta<typeof BaseInput> = {
  title: 'Base/BaseInput',
  component: BaseInput,
  tags: ['autodocs'],
  args: {
    modelValue: '',
    label: 'Nombre',
    placeholder: 'Escribí tu nombre...',
  },
}
export default meta

type Story = StoryObj<typeof BaseInput>

export const Default: Story = {}

export const WithError: Story = {
  args: {
    error: 'Este campo es obligatorio',
  },
}

export const Disabled: Story = {
  args: {
    modelValue: 'No editable',
    disabled: true,
  },
}

export const Sizes: Story = {
  render: (args) => ({
    components: { BaseInput },
    setup() {
      return { args }
    },
    template: `
      <div class="space-y-4">
        <BaseInput v-bind="args" size="sm" label="Chico" placeholder="sm" />
        <BaseInput v-bind="args" size="md" label="Mediano" placeholder="md" />
        <BaseInput v-bind="args" size="lg" label="Grande" placeholder="lg" />
      </div>
    `,
  }),
}
