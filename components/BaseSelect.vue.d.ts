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
    required?: boolean;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    size: string;
    disabled: boolean;
    searchable: boolean;
}>, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null | undefined) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    size: string;
    disabled: boolean;
    searchable: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((value: string | number | null | undefined) => any) | undefined;
}, {
    size: "sm" | "md" | "lg";
    disabled: boolean;
    searchable: boolean;
}, {}>;
export default _default;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<Required<T>[K]>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_PrettifyLocal<T> = {
    [K in keyof T as K]: T[K];
} & {};
