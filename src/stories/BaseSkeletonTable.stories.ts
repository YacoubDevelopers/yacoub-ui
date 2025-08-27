// SkeletonTable.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import SkeletonTable from '../components/BaseSkeletonTable.vue'

const meta: Meta<typeof SkeletonTable> = {
  title: 'Skeleton/SkeletonTable',
  component: SkeletonTable,
  tags: ['autodocs'],
  argTypes: {
    rows: { control: 'number' },
    cols: { control: 'number' },
    headers: { control: 'object' },
    widths: { control: 'object' },
  },
}

export default meta
type Story = StoryObj<typeof SkeletonTable>

export const WithHeaders: Story = {
  args: {
    headers: ['N° Pedido', 'Obra', 'Proveedor', 'Entrega', 'Estado'],
    rows: 5,
    widths: ['w-20', 'w-32', 'w-40', 'w-24', 'w-16'],
  },
}

export const NoHeaders: Story = {
  args: {
    cols: 4,
    rows: 3,
  },
}

export const CustomWidths: Story = {
  args: {
    headers: ['Columna A', 'Columna B', 'Columna C'],
    rows: 4,
    widths: ['w-10', 'w-28', 'w-16'],
  },
}
