import { Ref } from 'vue';
import { WatcherPropsData } from './index';
declare function useExpand<T>(watcherData: WatcherPropsData<T>): {
    updateExpandRows: () => void;
    toggleRowExpansion: (row: T, expanded?: boolean) => void;
    setExpandRowKeys: (rowKeys: string[]) => void;
    isRowExpanded: (row: T) => boolean;
    states: {
        expandRows: Ref<T[]>;
        defaultExpandAll: Ref<boolean>;
    };
};
export default useExpand;
