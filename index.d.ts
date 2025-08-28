import type { App } from 'vue';
import './styles/index.css';
import BaseButton from './components/BaseButton.vue';
import BaseInput from './components/BaseInput.vue';
import BaseTextarea from './components/BaseTextarea.vue';
import BaseSelect from './components/BaseSelect.vue';
import BaseSelectFlat from './components/BaseSelectFlat.vue';
import BaseModal from './components/BaseModal.vue';
import BaseDateTimePicker from './components/BaseDateTimePicker.vue';
import BaseSkeletonTable from './components/BaseSkeletonTable.vue';
import BaseResponsiveTable from './components/BaseResponsiveTable.vue';
import BaseCheckbox from './components/BaseCheckbox.vue';
export { BaseButton, BaseInput, BaseTextarea, BaseSelect, BaseSelectFlat, BaseModal, BaseDateTimePicker, BaseSkeletonTable, BaseResponsiveTable, BaseCheckbox, };
export declare const YacoubUI: {
    install(app: App): void;
};
