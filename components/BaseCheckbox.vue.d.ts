type __VLS_Props = {
    modelValue: boolean | undefined;
    label?: string;
    error?: string;
    id?: string;
    required?: boolean;
    labelPosition?: 'top' | 'right';
    disabled?: boolean;
};
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    modelValue: boolean;
    labelPosition: string;
    disabled: boolean;
}>, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    modelValue: boolean;
    labelPosition: string;
    disabled: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: boolean | undefined;
    labelPosition: "top" | "right";
}, {}>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
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
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_PrettifyLocal<T> = {
    [K in keyof T as K]: T[K];
} & {};
