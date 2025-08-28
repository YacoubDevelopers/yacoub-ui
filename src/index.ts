import type { App } from 'vue'
// Importa estilos base (tokens + tailwind)
// para que los consumidores puedan incluir el CSS
// y los componentes se vean correctamente.
import './styles/index.css'

import BaseButton from './components/BaseButton.vue'
import BaseInput from './components/BaseInput.vue'
import BaseTextarea from './components/BaseTextarea.vue'
import BaseSelect from './components/BaseSelect.vue'
import BaseSelectFlat from './components/BaseSelectFlat.vue'
import BaseModal from './components/BaseModal.vue'
import BaseDateTimePicker from './components/BaseDateTimePicker.vue'
import BaseSkeletonTable from './components/BaseSkeletonTable.vue'
import BaseResponsiveTable from './components/BaseResponsiveTable.vue'
import BaseCheckbox from './components/BaseCheckbox.vue'

export {
  BaseButton,
  BaseInput,
  BaseTextarea,
  BaseSelect,
  BaseSelectFlat,
  BaseModal,
  BaseDateTimePicker,
  BaseSkeletonTable,
  BaseResponsiveTable,
  BaseCheckbox,
}

export const YacoubUI = {
  install(app: App) {
    app.component('BaseButton', BaseButton)
    app.component('BaseInput', BaseInput)
    app.component('BaseTextarea', BaseTextarea)
    app.component('BaseSelect', BaseSelect)
    app.component('BaseSelectFlat', BaseSelectFlat)
    app.component('BaseModal', BaseModal)
    app.component('BaseDateTimePicker', BaseDateTimePicker)
    app.component('BaseSkeletonTable', BaseSkeletonTable)
    app.component('BaseResponsiveTable', BaseResponsiveTable)
    app.component('BaseCheckbox', BaseCheckbox)
  },
}
