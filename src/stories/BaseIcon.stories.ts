import type { Meta, StoryObj } from '@storybook/vue3'
import BaseIcon from '../components/BaseIcon.vue'

const meta: Meta<typeof BaseIcon> = {
  title: 'General/BaseIcon',
  component: BaseIcon,
}

export default meta

export type Story = StoryObj<typeof BaseIcon>

export const Default: Story = {
  args: {
    name: 'Activity',
  },
}
