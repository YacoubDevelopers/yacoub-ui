import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import BaseInput from '../components/BaseInput.vue'

const meta: Meta<typeof BaseInput> = {
  title: 'Forms/BaseInput',
  component: BaseInput,
}

export default meta

export type Story = StoryObj<typeof BaseInput>

export const Default: Story = {
  render: (args) => ({
    components: { BaseInput },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<BaseInput v-model="value" v-bind="args" />',
  }),
  args: {
    placeholder: 'Enter text',
  },
}
