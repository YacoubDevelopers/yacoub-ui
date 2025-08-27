<template>
  <table class="min-w-full divide-y divide-gray-200 text-sm">
    <!-- Opcional: Thead -->
    <thead v-if="headers.length" class="sticky top-0 z-10 bg-gray-50">
      <tr>
        <th
          v-for="(header, i) in headers"
          :key="i"
          class="px-4 py-3 text-left font-semibold text-gray-700"
        >
          {{ header }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="n in rowsToRender" :key="n">
        <td v-for="i in colsToRender" :key="i" class="px-4 py-2">
          <div class="h-4 animate-pulse rounded bg-gray-200" :class="widthClass(i - 1)" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    headers?: string[] // cabeceras opcionales
    rows?: number // cantidad de filas (default: 5)
    cols?: number // columnas si no hay headers
    widths?: string[] // clases tailwind opcionales para variar anchos
  }>(),
  {
    headers: () => [],
    rows: 5,
    cols: 4,
  }
)

const rowsToRender = props.rows
const colsToRender = props.headers.length ? props.headers.length : props.cols

function widthClass(index: number) {
  if (props.widths && props.widths.length > 0) {
    return props.widths[index % props.widths.length]
  }
  return 'w-24'
}
</script>
