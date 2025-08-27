// BaseCheckbox.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import BaseCheckbox from '../components/BaseCheckbox.vue'

const meta: Meta<typeof BaseCheckbox> = {
  title: 'Base/BaseCheckbox',
  component: BaseCheckbox,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
    label: { control: 'text' },
    error: { control: 'text' },
    labelPosition: {
      control: { type: 'select' },
      options: ['top', 'right'],
    },
  },
}

export default meta
type Story = StoryObj<typeof BaseCheckbox>

export const Default: Story = {
  args: {
    modelValue: false,
    label: 'Acepto los términos y condiciones',
  },
}

export const Checked: Story = {
  args: {
    modelValue: true,
    label: 'Notificaciones activadas',
  },
}

export const WithError: Story = {
  args: {
    modelValue: false,
    label: 'Debes aceptar para continuar',
    error: 'Campo obligatorio',
    required: true,
  },
}

export const LabelTop: Story = {
  args: {
    modelValue: false,
    label: 'Preferencias',
    labelPosition: 'top',
  },
}
