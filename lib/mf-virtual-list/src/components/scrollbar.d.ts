declare const ScrollBar: import("vue").DefineComponent<{
    layout: {
        type: import("vue").PropType<import("../types").LayoutDirection>;
        default: string;
    };
    total: NumberConstructor;
    ratio: NumberConstructor;
    clientSize: NumberConstructor;
    scrollFrom: NumberConstructor;
    visible: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "start-move" | "stop-move")[], "scroll" | "start-move" | "stop-move", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    layout: unknown;
    visible: boolean;
} & {
    total?: unknown;
    ratio?: unknown;
    clientSize?: unknown;
    scrollFrom?: unknown;
}>, {
    layout: unknown;
    visible: boolean;
}>;
export default ScrollBar;
