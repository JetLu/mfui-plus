import { WritableComputedRef, PropType } from 'vue';
import { TableColumnCtx } from './table-column/defaults';
declare const _default: import("vue").DefineComponent<{
    placement: {
        type: StringConstructor;
        default: string;
    };
    store: {
        type: PropType<{
            mutations: {
                setData(states: {
                    _currentRowKey: import("vue").Ref<string>;
                    currentRow: import("vue").Ref<unknown>;
                    expandRowKeys: import("vue").Ref<string[]>;
                    treeData: import("vue").Ref<unknown>;
                    indent: import("vue").Ref<number>;
                    lazy: import("vue").Ref<boolean>;
                    lazyTreeNodeMap: import("vue").Ref<{}>;
                    lazyColumnIdentifier: import("vue").Ref<string>;
                    childrenColumnName: import("vue").Ref<string>;
                    expandRows: import("vue").Ref<unknown[]>;
                    defaultExpandAll: import("vue").Ref<boolean>;
                    rowKey: import("vue").Ref<string>;
                    data: import("vue").Ref<unknown[]>;
                    _data: import("vue").Ref<unknown[]>;
                    isComplex: import("vue").Ref<boolean>;
                    _columns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    originColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    columns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    fixedColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    rightFixedColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    leafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    fixedLeafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    rightFixedLeafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    leafColumnsLength: import("vue").Ref<number>;
                    fixedLeafColumnsLength: import("vue").Ref<number>;
                    rightFixedLeafColumnsLength: import("vue").Ref<number>;
                    isAllSelected: import("vue").Ref<boolean>;
                    selection: import("vue").Ref<unknown[]>;
                    reserveSelection: import("vue").Ref<boolean>;
                    selectOnIndeterminate: import("vue").Ref<boolean>;
                    selectable: import("vue").Ref<(row: unknown, index: number) => boolean>;
                    filters: import("vue").Ref<Record<string, string[]>>;
                    filteredData: any;
                    sortingColumn: any;
                    sortProp: any;
                    sortOrder: any;
                    hoverRow: any;
                }, data: unknown[]): void;
                insertColumn(states: {
                    _currentRowKey: import("vue").Ref<string>;
                    currentRow: import("vue").Ref<unknown>;
                    expandRowKeys: import("vue").Ref<string[]>;
                    treeData: import("vue").Ref<unknown>;
                    indent: import("vue").Ref<number>;
                    lazy: import("vue").Ref<boolean>;
                    lazyTreeNodeMap: import("vue").Ref<{}>;
                    lazyColumnIdentifier: import("vue").Ref<string>;
                    childrenColumnName: import("vue").Ref<string>;
                    expandRows: import("vue").Ref<unknown[]>;
                    defaultExpandAll: import("vue").Ref<boolean>;
                    rowKey: import("vue").Ref<string>;
                    data: import("vue").Ref<unknown[]>;
                    _data: import("vue").Ref<unknown[]>;
                    isComplex: import("vue").Ref<boolean>;
                    _columns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    originColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    columns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    fixedColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    rightFixedColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    leafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    fixedLeafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    rightFixedLeafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    leafColumnsLength: import("vue").Ref<number>;
                    fixedLeafColumnsLength: import("vue").Ref<number>;
                    rightFixedLeafColumnsLength: import("vue").Ref<number>;
                    isAllSelected: import("vue").Ref<boolean>;
                    selection: import("vue").Ref<unknown[]>;
                    reserveSelection: import("vue").Ref<boolean>;
                    selectOnIndeterminate: import("vue").Ref<boolean>;
                    selectable: import("vue").Ref<(row: unknown, index: number) => boolean>;
                    filters: import("vue").Ref<Record<string, string[]>>;
                    filteredData: any;
                    sortingColumn: any;
                    sortProp: any;
                    sortOrder: any;
                    hoverRow: any;
                }, column: TableColumnCtx<unknown>, parent: TableColumnCtx<unknown>): void;
                removeColumn(states: {
                    _currentRowKey: import("vue").Ref<string>;
                    currentRow: import("vue").Ref<unknown>;
                    expandRowKeys: import("vue").Ref<string[]>;
                    treeData: import("vue").Ref<unknown>;
                    indent: import("vue").Ref<number>;
                    lazy: import("vue").Ref<boolean>;
                    lazyTreeNodeMap: import("vue").Ref<{}>;
                    lazyColumnIdentifier: import("vue").Ref<string>;
                    childrenColumnName: import("vue").Ref<string>;
                    expandRows: import("vue").Ref<unknown[]>;
                    defaultExpandAll: import("vue").Ref<boolean>;
                    rowKey: import("vue").Ref<string>;
                    data: import("vue").Ref<unknown[]>;
                    _data: import("vue").Ref<unknown[]>;
                    isComplex: import("vue").Ref<boolean>;
                    _columns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    originColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    columns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    fixedColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    rightFixedColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    leafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    fixedLeafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    rightFixedLeafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    leafColumnsLength: import("vue").Ref<number>;
                    fixedLeafColumnsLength: import("vue").Ref<number>;
                    rightFixedLeafColumnsLength: import("vue").Ref<number>;
                    isAllSelected: import("vue").Ref<boolean>;
                    selection: import("vue").Ref<unknown[]>;
                    reserveSelection: import("vue").Ref<boolean>;
                    selectOnIndeterminate: import("vue").Ref<boolean>;
                    selectable: import("vue").Ref<(row: unknown, index: number) => boolean>;
                    filters: import("vue").Ref<Record<string, string[]>>;
                    filteredData: any;
                    sortingColumn: any;
                    sortProp: any;
                    sortOrder: any;
                    hoverRow: any;
                }, column: TableColumnCtx<unknown>, parent: TableColumnCtx<unknown>): void;
                sort(states: {
                    _currentRowKey: import("vue").Ref<string>;
                    currentRow: import("vue").Ref<unknown>;
                    expandRowKeys: import("vue").Ref<string[]>;
                    treeData: import("vue").Ref<unknown>;
                    indent: import("vue").Ref<number>;
                    lazy: import("vue").Ref<boolean>;
                    lazyTreeNodeMap: import("vue").Ref<{}>;
                    lazyColumnIdentifier: import("vue").Ref<string>;
                    childrenColumnName: import("vue").Ref<string>;
                    expandRows: import("vue").Ref<unknown[]>;
                    defaultExpandAll: import("vue").Ref<boolean>;
                    rowKey: import("vue").Ref<string>;
                    data: import("vue").Ref<unknown[]>;
                    _data: import("vue").Ref<unknown[]>;
                    isComplex: import("vue").Ref<boolean>;
                    _columns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    originColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    columns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    fixedColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    rightFixedColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    leafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    fixedLeafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    rightFixedLeafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    leafColumnsLength: import("vue").Ref<number>;
                    fixedLeafColumnsLength: import("vue").Ref<number>;
                    rightFixedLeafColumnsLength: import("vue").Ref<number>;
                    isAllSelected: import("vue").Ref<boolean>;
                    selection: import("vue").Ref<unknown[]>;
                    reserveSelection: import("vue").Ref<boolean>;
                    selectOnIndeterminate: import("vue").Ref<boolean>;
                    selectable: import("vue").Ref<(row: unknown, index: number) => boolean>;
                    filters: import("vue").Ref<Record<string, string[]>>;
                    filteredData: any;
                    sortingColumn: any;
                    sortProp: any;
                    sortOrder: any;
                    hoverRow: any;
                }, options: import("./table/defaults").Sort): void;
                changeSortCondition(states: {
                    _currentRowKey: import("vue").Ref<string>;
                    currentRow: import("vue").Ref<unknown>;
                    expandRowKeys: import("vue").Ref<string[]>;
                    treeData: import("vue").Ref<unknown>;
                    indent: import("vue").Ref<number>;
                    lazy: import("vue").Ref<boolean>;
                    lazyTreeNodeMap: import("vue").Ref<{}>;
                    lazyColumnIdentifier: import("vue").Ref<string>;
                    childrenColumnName: import("vue").Ref<string>;
                    expandRows: import("vue").Ref<unknown[]>;
                    defaultExpandAll: import("vue").Ref<boolean>;
                    rowKey: import("vue").Ref<string>;
                    data: import("vue").Ref<unknown[]>;
                    _data: import("vue").Ref<unknown[]>;
                    isComplex: import("vue").Ref<boolean>;
                    _columns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    originColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    columns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    fixedColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    rightFixedColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    leafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    fixedLeafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    rightFixedLeafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    leafColumnsLength: import("vue").Ref<number>;
                    fixedLeafColumnsLength: import("vue").Ref<number>;
                    rightFixedLeafColumnsLength: import("vue").Ref<number>;
                    isAllSelected: import("vue").Ref<boolean>;
                    selection: import("vue").Ref<unknown[]>;
                    reserveSelection: import("vue").Ref<boolean>;
                    selectOnIndeterminate: import("vue").Ref<boolean>;
                    selectable: import("vue").Ref<(row: unknown, index: number) => boolean>;
                    filters: import("vue").Ref<Record<string, string[]>>;
                    filteredData: any;
                    sortingColumn: any;
                    sortProp: any;
                    sortOrder: any;
                    hoverRow: any;
                }, options: import("./table/defaults").Sort): void;
                filterChange(_states: {
                    _currentRowKey: import("vue").Ref<string>;
                    currentRow: import("vue").Ref<unknown>;
                    expandRowKeys: import("vue").Ref<string[]>;
                    treeData: import("vue").Ref<unknown>;
                    indent: import("vue").Ref<number>;
                    lazy: import("vue").Ref<boolean>;
                    lazyTreeNodeMap: import("vue").Ref<{}>;
                    lazyColumnIdentifier: import("vue").Ref<string>;
                    childrenColumnName: import("vue").Ref<string>;
                    expandRows: import("vue").Ref<unknown[]>;
                    defaultExpandAll: import("vue").Ref<boolean>;
                    rowKey: import("vue").Ref<string>;
                    data: import("vue").Ref<unknown[]>;
                    _data: import("vue").Ref<unknown[]>;
                    isComplex: import("vue").Ref<boolean>;
                    _columns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    originColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    columns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    fixedColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    rightFixedColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    leafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    fixedLeafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    rightFixedLeafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    leafColumnsLength: import("vue").Ref<number>;
                    fixedLeafColumnsLength: import("vue").Ref<number>;
                    rightFixedLeafColumnsLength: import("vue").Ref<number>;
                    isAllSelected: import("vue").Ref<boolean>;
                    selection: import("vue").Ref<unknown[]>;
                    reserveSelection: import("vue").Ref<boolean>;
                    selectOnIndeterminate: import("vue").Ref<boolean>;
                    selectable: import("vue").Ref<(row: unknown, index: number) => boolean>;
                    filters: import("vue").Ref<Record<string, string[]>>;
                    filteredData: any;
                    sortingColumn: any;
                    sortProp: any;
                    sortOrder: any;
                    hoverRow: any;
                }, options: import("./table/defaults").Filter<unknown>): void;
                toggleAllSelection(): void;
                rowSelectedChanged(_states: any, row: unknown): void;
                setHoverRow(states: {
                    _currentRowKey: import("vue").Ref<string>;
                    currentRow: import("vue").Ref<unknown>;
                    expandRowKeys: import("vue").Ref<string[]>;
                    treeData: import("vue").Ref<unknown>;
                    indent: import("vue").Ref<number>;
                    lazy: import("vue").Ref<boolean>;
                    lazyTreeNodeMap: import("vue").Ref<{}>;
                    lazyColumnIdentifier: import("vue").Ref<string>;
                    childrenColumnName: import("vue").Ref<string>;
                    expandRows: import("vue").Ref<unknown[]>;
                    defaultExpandAll: import("vue").Ref<boolean>;
                    rowKey: import("vue").Ref<string>;
                    data: import("vue").Ref<unknown[]>;
                    _data: import("vue").Ref<unknown[]>;
                    isComplex: import("vue").Ref<boolean>;
                    _columns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    originColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    columns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    fixedColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    rightFixedColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    leafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    fixedLeafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    rightFixedLeafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                    leafColumnsLength: import("vue").Ref<number>;
                    fixedLeafColumnsLength: import("vue").Ref<number>;
                    rightFixedLeafColumnsLength: import("vue").Ref<number>;
                    isAllSelected: import("vue").Ref<boolean>;
                    selection: import("vue").Ref<unknown[]>;
                    reserveSelection: import("vue").Ref<boolean>;
                    selectOnIndeterminate: import("vue").Ref<boolean>;
                    selectable: import("vue").Ref<(row: unknown, index: number) => boolean>;
                    filters: import("vue").Ref<Record<string, string[]>>;
                    filteredData: any;
                    sortingColumn: any;
                    sortProp: any;
                    sortOrder: any;
                    hoverRow: any;
                }, row: unknown): void;
                setCurrentRow(_states: any, row: unknown): void;
            };
            commit: (name: "sort" | "setData" | "insertColumn" | "removeColumn" | "changeSortCondition" | "filterChange" | "toggleAllSelection" | "rowSelectedChanged" | "setHoverRow" | "setCurrentRow", ...args: any[]) => void;
            updateTableScrollY: () => void;
            assertRowKey: () => void;
            updateColumns: () => void;
            scheduleLayout: (needUpdateColumns?: boolean, immediate?: boolean) => void;
            isSelected: (row: any) => boolean;
            clearSelection: () => void;
            cleanSelection: () => void;
            toggleRowSelection: (row: unknown, selected?: any, emitChange?: boolean) => void;
            _toggleAllSelection: () => void;
            toggleAllSelection: any;
            updateSelectionByRowKey: () => void;
            updateAllSelected: () => void;
            updateFilters: (columns: any, values: any) => {};
            updateCurrentRow: (_currentRow: unknown) => void;
            updateSort: (column: any, prop: any, order: any) => void;
            execFilter: () => void;
            execSort: () => void;
            execQuery: (ignore?: any) => void;
            clearFilter: (columnKeys: any) => void;
            clearSort: () => void;
            toggleRowExpansion: (row: unknown, expanded?: boolean) => void;
            setExpandRowKeysAdapter: (val: string[]) => void;
            setCurrentRowKey: (key: string) => void;
            toggleRowExpansionAdapter: (row: unknown, expanded: boolean) => void;
            isRowExpanded: (row: unknown) => boolean;
            updateExpandRows: () => void;
            updateCurrentRowData: () => void;
            loadOrToggle: (row: any) => void;
            states: {
                _currentRowKey: import("vue").Ref<string>;
                currentRow: import("vue").Ref<unknown>;
                expandRowKeys: import("vue").Ref<string[]>;
                treeData: import("vue").Ref<unknown>;
                indent: import("vue").Ref<number>;
                lazy: import("vue").Ref<boolean>;
                lazyTreeNodeMap: import("vue").Ref<{}>;
                lazyColumnIdentifier: import("vue").Ref<string>;
                childrenColumnName: import("vue").Ref<string>;
                expandRows: import("vue").Ref<unknown[]>;
                defaultExpandAll: import("vue").Ref<boolean>;
                rowKey: import("vue").Ref<string>;
                data: import("vue").Ref<unknown[]>;
                _data: import("vue").Ref<unknown[]>;
                isComplex: import("vue").Ref<boolean>;
                _columns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                originColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                columns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                fixedColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                rightFixedColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                leafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                fixedLeafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                rightFixedLeafColumns: import("vue").Ref<TableColumnCtx<unknown>[]>;
                leafColumnsLength: import("vue").Ref<number>;
                fixedLeafColumnsLength: import("vue").Ref<number>;
                rightFixedLeafColumnsLength: import("vue").Ref<number>;
                isAllSelected: import("vue").Ref<boolean>;
                selection: import("vue").Ref<unknown[]>;
                reserveSelection: import("vue").Ref<boolean>;
                selectOnIndeterminate: import("vue").Ref<boolean>;
                selectable: import("vue").Ref<(row: unknown, index: number) => boolean>;
                filters: import("vue").Ref<Record<string, string[]>>;
                filteredData: any;
                sortingColumn: any;
                sortProp: any;
                sortOrder: any;
                hoverRow: any;
            };
        }>;
    };
    column: {
        type: PropType<TableColumnCtx<unknown>>;
    };
    upDataColumn: {
        type: FunctionConstructor;
    };
}, {
    tooltipVisible: import("vue").Ref<boolean>;
    multiple: import("vue").ComputedRef<any>;
    filteredValue: WritableComputedRef<unknown[]>;
    filterValue: WritableComputedRef<any>;
    filters: import("vue").ComputedRef<any>;
    handleConfirm: () => void;
    handleReset: () => void;
    handleSelect: (_filterValue?: string) => void;
    isActive: (filter: any) => boolean;
    t: (...args: any[]) => string;
    showFilterPanel: (e: MouseEvent) => void;
    hideFilterPanel: () => void;
    popperPaneRef: import("vue").ComputedRef<any>;
    tooltip: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    placement: unknown;
} & {
    store?: unknown;
    column?: unknown;
    upDataColumn?: unknown;
}>, {
    placement: unknown;
}>;
export default _default;
