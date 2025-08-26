import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import BaseTextarea from '../components/BaseTextarea.vue'

const meta: Meta<typeof BaseTextarea> = {
  title: 'Forms/BaseTextarea',
  component: BaseTextarea,
}

export default meta

export type Story = StoryObj<typeof BaseTextarea>

export const Default: Story = {
  render: (args) => ({
    components: { BaseTextarea },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<BaseTextarea v-model="value" v-bind="args" />',
  }),
  args: {
    placeholder: 'Enter text',
  },
}
