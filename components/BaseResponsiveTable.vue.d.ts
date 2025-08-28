export interface TableHeader<T extends Record<string, any> = Record<string, any>> {
    key: (keyof T & string) | string;
    label: string;
    class?: string;
}
declare const _default: <T extends Record<string, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        onRowClick?: ((row: T) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{}>> & {
        onRowClick?: ((row: T) => any) | undefined;
    }, never>, "onRowClick"> & {
        headers: TableHeader<T>[];
        rows: T[];
        loading?: boolean;
        totalCols?: number;
        emptyMessage?: string;
        formatter?: (key: (keyof T & string) | string, value: any, row: T) => string | number | null;
    } & Partial<{}>> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: { [K in NonNullable<`row-${string}` | `row-${keyof T & string}`>]?: ((props: {
        row: T;
    }) => any) | undefined; } & { [K_1 in NonNullable<`row-${string}` | `row-${keyof T & string}`>]?: ((props: {
        row: T;
    }) => any) | undefined; } & {
        'header-action'?: (props: {}) => any;
    } & {
        'row-action'?: (props: {
            row: T;
        }) => any;
    } & {
        'card-action'?: (props: {
            row: T;
        }) => any;
    };
    emit: (e: "rowClick", row: T) => void;
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T as K]: T[K];
} & {};
