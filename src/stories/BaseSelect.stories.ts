import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import BaseSelect from '../components/BaseSelect.vue'

const meta: Meta<typeof BaseSelect> = {
  title: 'Forms/BaseSelect',
  component: BaseSelect,
}

export default meta

export type Story = StoryObj<typeof BaseSelect>

export const Default: Story = {
  render: (args) => ({
    components: { BaseSelect },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<BaseSelect v-model="value" v-bind="args" />',
  }),
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
  },
}
