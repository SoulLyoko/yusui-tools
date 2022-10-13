import type { AvueCrudInstance, PageOption } from "@smallwei/avue";
import type { Data } from "@yusui/types";
import type { UseCrudOptions } from "./types";

import { ref, computed, toRefs } from "vue";

import { useCrudState } from "./state";
import { useCrudMethods } from "./methods";
import { useHooks } from "./hooks";

export * from "./state";
export * from "./methods";
export * from "./hooks";
export * from "./mock";
export * from "./types";

/** T:FormData P:GetListParams */
export function useCrud<T extends Data = Data, P extends Data = Data>(options: UseCrudOptions<T, P>) {
  /** crudRef.value等同于this.$refs.crudRef */
  const crudRef = ref<AvueCrudInstance>();

  /** state */
  const crudState = useCrudState(options);
  const crudStateRefs = toRefs(crudState);

  /** hooks */
  const {
    emitter,
    beforeGetList,
    afterGetList,
    beforeSave,
    afterSave,
    beforeUpdate,
    afterUpdate,
    beforeDel,
    afterDel,
    beforeBatchDel,
    afterBatchDel,
    beforeSearch,
    afterSearch,
    beforeSearchReset,
    afterSearchReset,
    beforeOpen: beforeOpenHook,
    afterOpen: afterOpenHook,
    beforeClose: beforeCloseHook,
    afterClose: afterCloseHook
  } = useHooks<T, P>();

  /** methods */
  let {
    getDataList,
    handleSave,
    handleUpdate,
    handleDel,
    batchDel,
    searchChange,
    searchReset,
    selectionChange,
    pageSizeChange,
    pageCurrentChange,
    sortChange,
    beforeOpen,
    beforeClose
  } = useCrudMethods<T, P>({
    crudRef,
    crudState,
    emitter
  });

  /** 重置 */
  getDataList = options.getDataList ?? getDataList;
  handleSave = options.handleSave ?? handleSave;
  handleUpdate = options.handleUpdate ?? handleUpdate;
  handleDel = options.handleDel ?? handleDel;
  batchDel = options.batchDel ?? batchDel;
  searchChange = options.searchChange ?? searchChange;
  searchReset = options.searchReset ?? searchReset;
  selectionChange = options.selectionChange ?? selectionChange;
  pageSizeChange = options.pageSizeChange ?? pageSizeChange;
  pageCurrentChange = options.pageCurrentChange ?? pageCurrentChange;
  sortChange = options.sortChange ?? sortChange;
  beforeOpen = options.beforeOpen ?? beforeOpen;
  beforeClose = options.beforeClose ?? beforeClose;

  /** 使用v-bind绑定的值 */
  const bindVal = computed(() => ({
    /** 属性 */
    ref: "crudRef",
    modelValue: crudState.formData,
    tableLoading: crudState.tableLoading,
    option: options.tableOption ?? {},
    data: crudState.tableData,
    page: crudState.pageOption,
    search: crudState.searchForm,
    "before-open": beforeOpen,
    "before-close": beforeClose,
    /** 事件 */
    onRowSave: handleSave,
    onRowUpdate: handleUpdate,
    onRowDel: handleDel,
    onRefreshChange: getDataList,
    onSelectionChange: selectionChange,
    onCurrentChange: pageCurrentChange,
    onSizeChange: pageSizeChange,
    onSortChange: sortChange,
    onSearchChange: searchChange,
    onSearchReset: searchReset,
    "onUpdate:search": (form: P) => (crudState.searchForm = form),
    "onUpdate:page": (page: PageOption) => (crudState.pageOption = page as Required<PageOption>),
    "onUpdate:modelValue": (form: T) => (crudState.formData = form)
  }));

  return {
    crudRef,
    crudState,
    crudStateRefs,
    bindVal,
    getDataList,
    handleSave,
    handleUpdate,
    handleDel,
    batchDel,
    beforeGetList,
    afterGetList,
    beforeSave,
    afterSave,
    beforeUpdate,
    afterUpdate,
    beforeDel,
    afterDel,
    beforeBatchDel,
    afterBatchDel,
    beforeSearch,
    afterSearch,
    beforeSearchReset,
    afterSearchReset,
    beforeOpen: beforeOpenHook,
    afterOpen: afterOpenHook,
    beforeClose: beforeCloseHook,
    afterClose: afterCloseHook
  };
}
