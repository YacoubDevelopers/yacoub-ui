type __VLS_Props = {
    modelValue: string | number | null | undefined;
    label?: string;
    placeholder?: string;
    options: {
        value: string | number;
        label: string;
    }[];
    error?: string;
    searchable?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null | undefined) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>> & {
    "onUpdate:modelValue"?: ((value: string | number | null | undefined) => any) | undefined;
}, {}, {}>;
export default _default;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<Required<T>[K]>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
