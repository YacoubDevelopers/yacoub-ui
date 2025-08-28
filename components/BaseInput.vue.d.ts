/**
 * Input de texto reutilizable con label, estados de error y tamaños.
 */
type __VLS_Props = {
    /** Valor del input */
    modelValue: string | number | null | undefined;
    /** Label opcional que se muestra arriba */
    label?: string;
    /** Mensaje de error */
    error?: string;
    /** Tipo de input (text, email, password, number, etc.) */
    type?: string;
    /** Muestra un asterisco rojo en el label */
    required?: boolean;
    /** Tamaño del input */
    size?: 'sm' | 'md' | 'lg';
    /** Texto que se muestra cuando el input está vacío */
    placeholder?: string;
    /** Deshabilita el input */
    disabled?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    type: string;
    size: string;
    disabled: boolean;
}>, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    type: string;
    size: string;
    disabled: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
}, {
    type: string;
    size: "sm" | "md" | "lg";
    disabled: boolean;
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
