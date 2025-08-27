// BaseResponsiveTable.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import BaseResponsiveTable from '../components/BaseResponsiveTable.vue'
import { Eye } from 'lucide-vue-next'

const meta: Meta<typeof BaseResponsiveTable> = {
  title: 'Base/BaseResponsiveTable',
  component: BaseResponsiveTable,
  tags: ['autodocs'],
  argTypes: {
    loading: { control: 'boolean' },
    emptyMessage: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof BaseResponsiveTable>

const headers = [
  { key: 'id', label: 'N° Pedido', class: 'font-mono text-xs' },
  { key: 'obra', label: 'Obra' },
  { key: 'proveedor', label: 'Proveedor' },
  { key: 'fecha', label: 'Entrega' },
  { key: 'estado', label: 'Estado' },
]

const rows = [
  {
    id: 1,
    obra: 'Obra Central',
    proveedor: 'Proveedor A',
    fecha: '2025-09-01T10:00:00Z',
    estado: 'APROBADO',
  },
  {
    id: 2,
    obra: 'Obra Norte',
    proveedor: 'Proveedor B',
    fecha: '2025-09-10T08:30:00Z',
    estado: 'ENVIADO',
  },
]

function formatDate(date: string) {
  const d = new Date(date)
  return isNaN(d.valueOf()) ? '-' : d.toLocaleDateString('es-AR', { dateStyle: 'short' })
}

export const Default: Story = {
  args: {
    headers,
    rows: rows.map(r => ({
      ...r,
      fecha: formatDate(r.fecha),
    })),
    loading: false,
    emptyMessage: 'No se encontraron registros',
  },
}

export const Loading: Story = {
  args: {
    headers,
    rows: [],
    loading: true,
  },
}

export const Empty: Story = {
  args: {
    headers,
    rows: [],
    loading: false,
    emptyMessage: 'No hay pedidos disponibles',
  },
}

export const WithActions: Story = {
  render: (args: any) => ({
    components: { BaseResponsiveTable, Eye },
    setup() {
      return { args }
    },
    template: `
      <BaseResponsiveTable v-bind="args">
        <template #header-action>Acción</template>

        <template #row-action="{ row }">
          <button
            class="text-primary p-1 transition hover:text-yellow-700"
            @click.stop="alert('Detalle de pedido ' + row.id)"
          >
            <Eye class="inline h-4 w-4 align-middle" />
          </button>
        </template>

        <template #card-action="{ row }">
          <button
            class="text-primary text-xs underline"
            @click.stop="alert('Detalle de pedido ' + row.id)"
          >
            Ver detalle
          </button>
        </template>
      </BaseResponsiveTable>
    `,
  }),
  args: {
    headers,
    rows: rows.map(r => ({
      ...r,
      fecha: formatDate(r.fecha),
    })),
  },
}
