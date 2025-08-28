type __VLS_Props = {
    modelValue: boolean;
    title?: string;
    width?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
    confirm?: boolean;
    confirmText?: string;
    cancelText?: string;
    destructive?: boolean;
    closeOnBackdrop?: boolean;
    closeOnEsc?: boolean;
};
declare var __VLS_11: {}, __VLS_13: {}, __VLS_15: {};
type __VLS_Slots = {} & {
    header?: (props: typeof __VLS_11) => any;
} & {
    default?: (props: typeof __VLS_13) => any;
} & {
    footer?: (props: typeof __VLS_15) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    width: string;
    confirm: boolean;
    confirmText: string;
    cancelText: string;
    destructive: boolean;
    closeOnBackdrop: boolean;
    closeOnEsc: boolean;
}>, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
    confirm: () => void;
    cancel: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    width: string;
    confirm: boolean;
    confirmText: string;
    cancelText: string;
    destructive: boolean;
    closeOnBackdrop: boolean;
    closeOnEsc: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onCancel?: (() => any) | undefined;
    onConfirm?: (() => any) | undefined;
}, {
    width: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
    confirm: boolean;
    confirmText: string;
    cancelText: string;
    destructive: boolean;
    closeOnBackdrop: boolean;
    closeOnEsc: boolean;
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
