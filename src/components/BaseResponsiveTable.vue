<!-- components/base/BaseResponsiveTable.vue -->
<script setup lang="ts">
import SkeletonTable from '../components/BaseSkeletonTable.vue'

export interface TableHeader {
  key: string
  label: string
  class?: string
}

defineProps<{
  headers: TableHeader[]
  rows: Record<string, any>[]
  loading?: boolean
  totalCols?: number
  emptyMessage?: string
  /** Función opcional para formatear valores en las celdas */
  formatter?: (key: string, value: any, row: any) => string | number | null
}>()

const emit = defineEmits<{
  (e: 'rowClick', row: any): void
}>()

function handleRowClick(row: any) {
  emit('rowClick', row)
}
</script>

<template>
  <div>
    <!-- 🖥️ PC TABLE -->
    <div class="hidden sm:block">
      <div class="relative overflow-x-auto rounded-xl border border-gray-200 shadow">
        <SkeletonTable v-if="loading" :headers="headers.map(h => h.label)" :rows="5" />
        <table v-else class="min-w-full divide-y divide-gray-200 text-sm">
          <thead class="sticky top-0 z-10 bg-gray-50">
            <tr>
              <th
                v-for="h in headers"
                :key="h.key"
                :class="['px-4 py-3 text-left font-semibold text-gray-700', h.class]"
              >
                {{ h.label }}
              </th>
              <!-- Slot para header extra (acciones, etc) -->
              <th
                v-if="$slots['header-action']"
                class="px-4 py-3 text-center font-semibold text-gray-700"
              >
                <slot name="header-action" />
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 bg-white">
            <tr
              v-for="row in rows"
              :key="row.id"
              class="hover:bg-primary/10 group cursor-pointer transition"
              @click="handleRowClick(row)"
            >
              <td
                v-for="h in headers"
                :key="h.key"
                :class="['px-4 py-2 text-xs text-gray-600', h.class]"
              >
                {{ formatter ? formatter(h.key, row[h.key], row) : row[h.key] }}
              </td>
              <!-- Slot para acción por fila -->
              <td v-if="$slots['row-action']" class="px-4 py-2 text-center">
                <slot name="row-action" :row="row" />
              </td>
            </tr>
            <tr v-if="!loading && !rows.length">
              <td
                :colspan="totalCols || headers.length + ($slots['row-action'] ? 1 : 0)"
                class="p-6 text-center text-gray-400"
              >
                {{ emptyMessage || 'No se encontraron registros.' }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 📱 MOBILE CARDS -->
    <div class="space-y-4 sm:hidden">
      <div
        v-for="row in rows"
        :key="row.id"
        class="hover:bg-primary/5 cursor-pointer rounded-lg border border-gray-200 p-4 shadow transition"
        @click="handleRowClick(row)"
      >
        <div v-for="h in headers" :key="h.key" class="mb-1 text-xs text-gray-600">
          <strong>{{ h.label }}:</strong>
          {{ formatter ? formatter(h.key, row[h.key], row) : row[h.key] }}
        </div>
        <!-- Slot acción en cards -->
        <div v-if="$slots['card-action']" class="mt-2 text-right">
          <slot name="card-action" :row="row" />
        </div>
      </div>

      <div v-if="!loading && !rows.length" class="p-6 text-center text-gray-400">
        {{ emptyMessage || 'No se encontraron registros.' }}
      </div>
    </div>
  </div>
</template>
