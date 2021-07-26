import TreeStore from './tree-store';
import { TreeNodeOptions, TreeNodeData, TreeKey, FakeNode, TreeNodeLoadedDefaultProps, TreeNodeChildState } from '../tree.type';
export declare const getChildState: (node: Node[]) => TreeNodeChildState;
export default class Node {
    id: number;
    text: string;
    checked: boolean;
    indeterminate: boolean;
    data: TreeNodeData;
    expanded: boolean;
    parent: Node;
    visible: boolean;
    isCurrent: boolean;
    store: TreeStore;
    isLeafByUser: boolean;
    isLeaf: boolean;
    canFocus: boolean;
    level: number;
    loaded: boolean;
    childNodes: Node[];
    loading: boolean;
    constructor(options: TreeNodeOptions);
    initialize(): void;
    setData(data: TreeNodeData): void;
    get label(): string;
    get key(): TreeKey;
    get disabled(): boolean;
    get nextSibling(): Nullable<Node>;
    get previousSibling(): Nullable<Node>;
    contains(target: Node, deep?: boolean): boolean;
    remove(): void;
    insertChild(child?: FakeNode | Node, index?: number, batch?: boolean): void;
    insertBefore(child: FakeNode | Node, ref: Node): void;
    insertAfter(child: FakeNode | Node, ref: Node): void;
    removeChild(child: Node): void;
    removeChildByData(data: TreeNodeData): void;
    expand(callback?: () => void, expandParent?: boolean): void;
    doCreateChildren(array: TreeNodeData[], defaultProps?: TreeNodeLoadedDefaultProps): void;
    collapse(): void;
    shouldLoadData(): boolean;
    updateLeafState(): void;
    setChecked(value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean): void;
    getChildren(forceInit?: boolean): TreeNodeData | TreeNodeData[];
    updateChildren(): void;
    loadData(callback: (node: Node) => void, defaultProps?: TreeNodeLoadedDefaultProps): void;
}
