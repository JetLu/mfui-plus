/// <reference types="lodash" />
import TableLayout from './table-layout';
import { Table } from './table/defaults';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: import("vue").PropType<any[]>;
        default: () => any[];
    };
    size: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    stripe: BooleanConstructor;
    border: BooleanConstructor;
    rowKey: import("vue").PropType<string | ((row: any) => string)>;
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSummary: BooleanConstructor;
    sumText: StringConstructor;
    summaryMethod: import("vue").PropType<import("./table/defaults").SummaryMethod<any>>;
    rowClassName: import("vue").PropType<import("./table/defaults").ColumnCls<any>>;
    rowStyle: import("vue").PropType<import("./table/defaults").ColumnStyle<any>>;
    cellClassName: import("vue").PropType<string | ((data: {
        row: any;
        rowIndex: number;
        column: import("./table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => string)>;
    cellStyle: import("vue").PropType<import("vue").CSSProperties | ((data: {
        row: any;
        rowIndex: number;
        column: import("./table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => import("vue").CSSProperties)>;
    headerRowClassName: import("vue").PropType<import("./table/defaults").ColumnCls<any>>;
    headerRowStyle: import("vue").PropType<import("./table/defaults").ColumnStyle<any>>;
    headerCellClassName: import("vue").PropType<string | ((data: {
        row: any;
        rowIndex: number;
        column: import("./table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => string)>;
    headerCellStyle: import("vue").PropType<import("vue").CSSProperties | ((data: {
        row: any;
        rowIndex: number;
        column: import("./table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => import("vue").CSSProperties)>;
    highlightCurrentRow: BooleanConstructor;
    currentRowKey: (StringConstructor | NumberConstructor)[];
    emptyText: StringConstructor;
    expandRowKeys: import("vue").PropType<any[]>;
    defaultExpandAll: BooleanConstructor;
    defaultSort: import("vue").PropType<import("./table/defaults").Sort>;
    tooltipEffect: StringConstructor;
    spanMethod: import("vue").PropType<(data: {
        row: any;
        rowIndex: number;
        column: import("./table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => number[] | {
        rowspan: number;
        colspan: number;
    }>;
    selectOnIndeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    indent: {
        type: NumberConstructor;
        default: number;
    };
    treeProps: {
        type: import("vue").PropType<{
            hasChildren?: string;
            children?: string;
        }>;
        default: () => {
            hasChildren: string;
            children: string;
        };
    };
    lazy: BooleanConstructor;
    load: import("vue").PropType<(row: any, treeNode: import("./table/defaults").TreeNode, resolve: (data: any[]) => void) => void>;
    style: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    className: {
        type: StringConstructor;
        default: string;
    };
}, {
    layout: TableLayout<any>;
    store: {
        mutations: {
            setData(states: {
                _currentRowKey: import("vue").Ref<string>;
                currentRow: import("vue").Ref<any>;
                expandRowKeys: import("vue").Ref<string[]>;
                treeData: import("vue").Ref<unknown>;
                indent: import("vue").Ref<number>;
                lazy: import("vue").Ref<boolean>;
                lazyTreeNodeMap: import("vue").Ref<{}>;
                lazyColumnIdentifier: import("vue").Ref<string>;
                childrenColumnName: import("vue").Ref<string>;
                expandRows: import("vue").Ref<any[]>;
                defaultExpandAll: import("vue").Ref<boolean>;
                rowKey: import("vue").Ref<string>;
                data: import("vue").Ref<any[]>;
                _data: import("vue").Ref<any[]>;
                isComplex: import("vue").Ref<boolean>;
                _columns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                originColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                columns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                fixedColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                rightFixedColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                leafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                fixedLeafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                rightFixedLeafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                leafColumnsLength: import("vue").Ref<number>;
                fixedLeafColumnsLength: import("vue").Ref<number>;
                rightFixedLeafColumnsLength: import("vue").Ref<number>;
                isAllSelected: import("vue").Ref<boolean>;
                selection: import("vue").Ref<any[]>;
                reserveSelection: import("vue").Ref<boolean>;
                selectOnIndeterminate: import("vue").Ref<boolean>;
                selectable: import("vue").Ref<(row: any, index: number) => boolean>;
                filters: import("vue").Ref<Record<string, string[]>>;
                filteredData: any;
                sortingColumn: any;
                sortProp: any;
                sortOrder: any;
                hoverRow: any;
            }, data: any[]): void;
            insertColumn(states: {
                _currentRowKey: import("vue").Ref<string>;
                currentRow: import("vue").Ref<any>;
                expandRowKeys: import("vue").Ref<string[]>;
                treeData: import("vue").Ref<unknown>;
                indent: import("vue").Ref<number>;
                lazy: import("vue").Ref<boolean>;
                lazyTreeNodeMap: import("vue").Ref<{}>;
                lazyColumnIdentifier: import("vue").Ref<string>;
                childrenColumnName: import("vue").Ref<string>;
                expandRows: import("vue").Ref<any[]>;
                defaultExpandAll: import("vue").Ref<boolean>;
                rowKey: import("vue").Ref<string>;
                data: import("vue").Ref<any[]>;
                _data: import("vue").Ref<any[]>;
                isComplex: import("vue").Ref<boolean>;
                _columns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                originColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                columns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                fixedColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                rightFixedColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                leafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                fixedLeafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                rightFixedLeafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                leafColumnsLength: import("vue").Ref<number>;
                fixedLeafColumnsLength: import("vue").Ref<number>;
                rightFixedLeafColumnsLength: import("vue").Ref<number>;
                isAllSelected: import("vue").Ref<boolean>;
                selection: import("vue").Ref<any[]>;
                reserveSelection: import("vue").Ref<boolean>;
                selectOnIndeterminate: import("vue").Ref<boolean>;
                selectable: import("vue").Ref<(row: any, index: number) => boolean>;
                filters: import("vue").Ref<Record<string, string[]>>;
                filteredData: any;
                sortingColumn: any;
                sortProp: any;
                sortOrder: any;
                hoverRow: any;
            }, column: import("./table-column/defaults").TableColumnCtx<any>, parent: import("./table-column/defaults").TableColumnCtx<any>): void;
            removeColumn(states: {
                _currentRowKey: import("vue").Ref<string>;
                currentRow: import("vue").Ref<any>;
                expandRowKeys: import("vue").Ref<string[]>;
                treeData: import("vue").Ref<unknown>;
                indent: import("vue").Ref<number>;
                lazy: import("vue").Ref<boolean>;
                lazyTreeNodeMap: import("vue").Ref<{}>;
                lazyColumnIdentifier: import("vue").Ref<string>;
                childrenColumnName: import("vue").Ref<string>;
                expandRows: import("vue").Ref<any[]>;
                defaultExpandAll: import("vue").Ref<boolean>;
                rowKey: import("vue").Ref<string>;
                data: import("vue").Ref<any[]>;
                _data: import("vue").Ref<any[]>;
                isComplex: import("vue").Ref<boolean>;
                _columns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                originColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                columns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                fixedColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                rightFixedColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                leafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                fixedLeafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                rightFixedLeafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                leafColumnsLength: import("vue").Ref<number>;
                fixedLeafColumnsLength: import("vue").Ref<number>;
                rightFixedLeafColumnsLength: import("vue").Ref<number>;
                isAllSelected: import("vue").Ref<boolean>;
                selection: import("vue").Ref<any[]>;
                reserveSelection: import("vue").Ref<boolean>;
                selectOnIndeterminate: import("vue").Ref<boolean>;
                selectable: import("vue").Ref<(row: any, index: number) => boolean>;
                filters: import("vue").Ref<Record<string, string[]>>;
                filteredData: any;
                sortingColumn: any;
                sortProp: any;
                sortOrder: any;
                hoverRow: any;
            }, column: import("./table-column/defaults").TableColumnCtx<any>, parent: import("./table-column/defaults").TableColumnCtx<any>): void;
            sort(states: {
                _currentRowKey: import("vue").Ref<string>;
                currentRow: import("vue").Ref<any>;
                expandRowKeys: import("vue").Ref<string[]>;
                treeData: import("vue").Ref<unknown>;
                indent: import("vue").Ref<number>;
                lazy: import("vue").Ref<boolean>;
                lazyTreeNodeMap: import("vue").Ref<{}>;
                lazyColumnIdentifier: import("vue").Ref<string>;
                childrenColumnName: import("vue").Ref<string>;
                expandRows: import("vue").Ref<any[]>;
                defaultExpandAll: import("vue").Ref<boolean>;
                rowKey: import("vue").Ref<string>;
                data: import("vue").Ref<any[]>;
                _data: import("vue").Ref<any[]>;
                isComplex: import("vue").Ref<boolean>;
                _columns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                originColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                columns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                fixedColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                rightFixedColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                leafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                fixedLeafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                rightFixedLeafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                leafColumnsLength: import("vue").Ref<number>;
                fixedLeafColumnsLength: import("vue").Ref<number>;
                rightFixedLeafColumnsLength: import("vue").Ref<number>;
                isAllSelected: import("vue").Ref<boolean>;
                selection: import("vue").Ref<any[]>;
                reserveSelection: import("vue").Ref<boolean>;
                selectOnIndeterminate: import("vue").Ref<boolean>;
                selectable: import("vue").Ref<(row: any, index: number) => boolean>;
                filters: import("vue").Ref<Record<string, string[]>>;
                filteredData: any;
                sortingColumn: any;
                sortProp: any;
                sortOrder: any;
                hoverRow: any;
            }, options: import("./table/defaults").Sort): void;
            changeSortCondition(states: {
                _currentRowKey: import("vue").Ref<string>;
                currentRow: import("vue").Ref<any>;
                expandRowKeys: import("vue").Ref<string[]>;
                treeData: import("vue").Ref<unknown>;
                indent: import("vue").Ref<number>;
                lazy: import("vue").Ref<boolean>;
                lazyTreeNodeMap: import("vue").Ref<{}>;
                lazyColumnIdentifier: import("vue").Ref<string>;
                childrenColumnName: import("vue").Ref<string>;
                expandRows: import("vue").Ref<any[]>;
                defaultExpandAll: import("vue").Ref<boolean>;
                rowKey: import("vue").Ref<string>;
                data: import("vue").Ref<any[]>;
                _data: import("vue").Ref<any[]>;
                isComplex: import("vue").Ref<boolean>;
                _columns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                originColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                columns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                fixedColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                rightFixedColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                leafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                fixedLeafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                rightFixedLeafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                leafColumnsLength: import("vue").Ref<number>;
                fixedLeafColumnsLength: import("vue").Ref<number>;
                rightFixedLeafColumnsLength: import("vue").Ref<number>;
                isAllSelected: import("vue").Ref<boolean>;
                selection: import("vue").Ref<any[]>;
                reserveSelection: import("vue").Ref<boolean>;
                selectOnIndeterminate: import("vue").Ref<boolean>;
                selectable: import("vue").Ref<(row: any, index: number) => boolean>;
                filters: import("vue").Ref<Record<string, string[]>>;
                filteredData: any;
                sortingColumn: any;
                sortProp: any;
                sortOrder: any;
                hoverRow: any;
            }, options: import("./table/defaults").Sort): void;
            filterChange(_states: {
                _currentRowKey: import("vue").Ref<string>;
                currentRow: import("vue").Ref<any>;
                expandRowKeys: import("vue").Ref<string[]>;
                treeData: import("vue").Ref<unknown>;
                indent: import("vue").Ref<number>;
                lazy: import("vue").Ref<boolean>;
                lazyTreeNodeMap: import("vue").Ref<{}>;
                lazyColumnIdentifier: import("vue").Ref<string>;
                childrenColumnName: import("vue").Ref<string>;
                expandRows: import("vue").Ref<any[]>;
                defaultExpandAll: import("vue").Ref<boolean>;
                rowKey: import("vue").Ref<string>;
                data: import("vue").Ref<any[]>;
                _data: import("vue").Ref<any[]>;
                isComplex: import("vue").Ref<boolean>;
                _columns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                originColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                columns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                fixedColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                rightFixedColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                leafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                fixedLeafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                rightFixedLeafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                leafColumnsLength: import("vue").Ref<number>;
                fixedLeafColumnsLength: import("vue").Ref<number>;
                rightFixedLeafColumnsLength: import("vue").Ref<number>;
                isAllSelected: import("vue").Ref<boolean>;
                selection: import("vue").Ref<any[]>;
                reserveSelection: import("vue").Ref<boolean>;
                selectOnIndeterminate: import("vue").Ref<boolean>;
                selectable: import("vue").Ref<(row: any, index: number) => boolean>;
                filters: import("vue").Ref<Record<string, string[]>>;
                filteredData: any;
                sortingColumn: any;
                sortProp: any;
                sortOrder: any;
                hoverRow: any;
            }, options: import("./table/defaults").Filter<any>): void;
            toggleAllSelection(): void;
            rowSelectedChanged(_states: any, row: any): void;
            setHoverRow(states: {
                _currentRowKey: import("vue").Ref<string>;
                currentRow: import("vue").Ref<any>;
                expandRowKeys: import("vue").Ref<string[]>;
                treeData: import("vue").Ref<unknown>;
                indent: import("vue").Ref<number>;
                lazy: import("vue").Ref<boolean>;
                lazyTreeNodeMap: import("vue").Ref<{}>;
                lazyColumnIdentifier: import("vue").Ref<string>;
                childrenColumnName: import("vue").Ref<string>;
                expandRows: import("vue").Ref<any[]>;
                defaultExpandAll: import("vue").Ref<boolean>;
                rowKey: import("vue").Ref<string>;
                data: import("vue").Ref<any[]>;
                _data: import("vue").Ref<any[]>;
                isComplex: import("vue").Ref<boolean>;
                _columns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                originColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                columns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                fixedColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                rightFixedColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                leafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                fixedLeafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                rightFixedLeafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
                leafColumnsLength: import("vue").Ref<number>;
                fixedLeafColumnsLength: import("vue").Ref<number>;
                rightFixedLeafColumnsLength: import("vue").Ref<number>;
                isAllSelected: import("vue").Ref<boolean>;
                selection: import("vue").Ref<any[]>;
                reserveSelection: import("vue").Ref<boolean>;
                selectOnIndeterminate: import("vue").Ref<boolean>;
                selectable: import("vue").Ref<(row: any, index: number) => boolean>;
                filters: import("vue").Ref<Record<string, string[]>>;
                filteredData: any;
                sortingColumn: any;
                sortProp: any;
                sortOrder: any;
                hoverRow: any;
            }, row: any): void;
            setCurrentRow(_states: any, row: any): void;
        };
        commit: (name: "sort" | "setData" | "insertColumn" | "removeColumn" | "changeSortCondition" | "filterChange" | "toggleAllSelection" | "rowSelectedChanged" | "setHoverRow" | "setCurrentRow", ...args: any[]) => void;
        updateTableScrollY: () => void;
        assertRowKey: () => void;
        updateColumns: () => void;
        scheduleLayout: (needUpdateColumns?: boolean, immediate?: boolean) => void;
        isSelected: (row: any) => boolean;
        clearSelection: () => void;
        cleanSelection: () => void;
        toggleRowSelection: (row: any, selected?: any, emitChange?: boolean) => void;
        _toggleAllSelection: () => void;
        toggleAllSelection: any;
        updateSelectionByRowKey: () => void;
        updateAllSelected: () => void;
        updateFilters: (columns: any, values: any) => {};
        updateCurrentRow: (_currentRow: any) => void;
        updateSort: (column: any, prop: any, order: any) => void;
        execFilter: () => void;
        execSort: () => void;
        execQuery: (ignore?: any) => void;
        clearFilter: (columnKeys: any) => void;
        clearSort: () => void;
        toggleRowExpansion: (row: any, expanded?: boolean) => void;
        setExpandRowKeysAdapter: (val: string[]) => void;
        setCurrentRowKey: (key: string) => void;
        toggleRowExpansionAdapter: (row: any, expanded: boolean) => void;
        isRowExpanded: (row: any) => boolean;
        updateExpandRows: () => void;
        updateCurrentRowData: () => void;
        loadOrToggle: (row: any) => void;
        states: {
            _currentRowKey: import("vue").Ref<string>;
            currentRow: import("vue").Ref<any>;
            expandRowKeys: import("vue").Ref<string[]>;
            treeData: import("vue").Ref<unknown>;
            indent: import("vue").Ref<number>;
            lazy: import("vue").Ref<boolean>;
            lazyTreeNodeMap: import("vue").Ref<{}>;
            lazyColumnIdentifier: import("vue").Ref<string>;
            childrenColumnName: import("vue").Ref<string>;
            expandRows: import("vue").Ref<any[]>;
            defaultExpandAll: import("vue").Ref<boolean>;
            rowKey: import("vue").Ref<string>;
            data: import("vue").Ref<any[]>;
            _data: import("vue").Ref<any[]>;
            isComplex: import("vue").Ref<boolean>;
            _columns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
            originColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
            columns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
            fixedColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
            rightFixedColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
            leafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
            fixedLeafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
            rightFixedLeafColumns: import("vue").Ref<import("./table-column/defaults").TableColumnCtx<any>[]>;
            leafColumnsLength: import("vue").Ref<number>;
            fixedLeafColumnsLength: import("vue").Ref<number>;
            rightFixedLeafColumnsLength: import("vue").Ref<number>;
            isAllSelected: import("vue").Ref<boolean>;
            selection: import("vue").Ref<any[]>;
            reserveSelection: import("vue").Ref<boolean>;
            selectOnIndeterminate: import("vue").Ref<boolean>;
            selectable: import("vue").Ref<(row: any, index: number) => boolean>;
            filters: import("vue").Ref<Record<string, string[]>>;
            filteredData: any;
            sortingColumn: any;
            sortProp: any;
            sortOrder: any;
            hoverRow: any;
        };
    };
    handleHeaderFooterMousewheel: (event: any, data: any) => void;
    handleMouseLeave: () => void;
    tableId: string;
    tableSize: import("vue").ComputedRef<any>;
    isHidden: import("vue").Ref<boolean>;
    isEmpty: import("vue").ComputedRef<boolean>;
    renderExpanded: any;
    resizeProxyVisible: import("vue").Ref<boolean>;
    resizeState: import("vue").Ref<{
        width: any;
        height: any;
    }>;
    isGroup: import("vue").Ref<boolean>;
    bodyWidth: import("vue").ComputedRef<string>;
    bodyHeight: import("vue").ComputedRef<{
        height: string;
        'max-height'?: undefined;
    } | {
        'max-height': string;
        height?: undefined;
    } | {
        height?: undefined;
        'max-height'?: undefined;
    }>;
    emptyBlockStyle: import("vue").ComputedRef<{
        width: string;
        height: string;
    }>;
    debouncedUpdateLayout: import("lodash").DebouncedFunc<() => void>;
    handleFixedMousewheel: (event: any, data: any) => void;
    fixedHeight: import("vue").ComputedRef<{
        bottom: number;
        height?: undefined;
    } | {
        bottom: string;
        height?: undefined;
    } | {
        height: string;
        bottom?: undefined;
    }>;
    fixedBodyHeight: import("vue").ComputedRef<{
        height: string;
        'max-height'?: undefined;
    } | {
        'max-height': string;
        height?: undefined;
    } | {
        height?: undefined;
        'max-height'?: undefined;
    }>;
    setCurrentRow: (row: any) => void;
    toggleRowSelection: (row: any, selected: boolean) => void;
    clearSelection: () => void;
    clearFilter: (columnKeys: string[]) => void;
    toggleAllSelection: () => void;
    toggleRowExpansion: (row: any, expanded: boolean) => void;
    clearSort: () => void;
    doLayout: () => void;
    sort: (prop: string, order: string) => void;
    t: (...args: any[]) => string;
    setDragVisible: (visible: boolean) => void;
    context: Table<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "select-all" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "current-change" | "header-dragend" | "expand-change")[], "select" | "select-all" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "current-change" | "header-dragend" | "expand-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    style: unknown;
    border: boolean;
    stripe: boolean;
    treeProps: unknown;
    data: unknown;
    fit: boolean;
    showHeader: boolean;
    showSummary: boolean;
    highlightCurrentRow: boolean;
    defaultExpandAll: boolean;
    selectOnIndeterminate: boolean;
    indent: unknown;
    lazy: boolean;
    className: unknown;
} & {
    defaultSort?: unknown;
    height?: unknown;
    rowClassName?: unknown;
    rowStyle?: unknown;
    tooltipEffect?: unknown;
    summaryMethod?: unknown;
    sumText?: unknown;
    rowKey?: unknown;
    cellClassName?: unknown;
    cellStyle?: unknown;
    headerRowClassName?: unknown;
    headerRowStyle?: unknown;
    headerCellClassName?: unknown;
    headerCellStyle?: unknown;
    expandRowKeys?: unknown;
    spanMethod?: unknown;
    load?: unknown;
    size?: unknown;
    width?: unknown;
    maxHeight?: unknown;
    currentRowKey?: unknown;
    emptyText?: unknown;
}>, {
    style: unknown;
    border: boolean;
    stripe: boolean;
    treeProps: unknown;
    data: unknown;
    fit: boolean;
    showHeader: boolean;
    showSummary: boolean;
    highlightCurrentRow: boolean;
    defaultExpandAll: boolean;
    selectOnIndeterminate: boolean;
    indent: unknown;
    lazy: boolean;
    className: unknown;
}>;
export default _default;
