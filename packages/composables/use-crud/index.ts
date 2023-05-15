import type { AvueCrudDefaults, AvueCrudInstance, PageOption } from '@smallwei/avue'
import type { Data } from '@yusui/types'
import type { UseCrudOptions } from './types'

import { computed, ref, toRefs } from 'vue'

import { useCrudState } from './state'
import { useCrudMethods } from './methods'
import { useHooks } from './hooks'

export * from './state'
export * from './methods'
export * from './hooks'
export * from './mock'
export * from './types'

/** T:FormData P:GetListParams */
export function useCrud<T extends Data = Data, P extends Data = Data>(options: UseCrudOptions<T, P>) {
  /** crudRef.value等同于this.$refs.crudRef */
  const crudRef = ref<AvueCrudInstance<T>>()

  /** state */
  const crudState = useCrudState(options)
  const crudStateRefs = toRefs(crudState)

  /** hooks */
  const {
    emitter,
    beforeGetList,
    afterGetList,
    beforeSave,
    afterSave,
    beforeUpdate,
    afterUpdate,
    beforeSubmit,
    afterSubmit,
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
    afterClose: afterCloseHook,
  } = useHooks<T, P>()

  /** methods */
  const {
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
    beforeClose,
  } = useCrudMethods<T, P>({
    crudRef,
    crudState,
    emitter,
    options,
  })

  /** 使用v-bind绑定的值 */
  const bindVal = computed(() => ({
    /** 属性 */
    'ref': (el: AvueCrudInstance) => (crudRef.value = el),
    'modelValue': crudState.formData,
    'tableLoading': crudState.tableLoading,
    'option': options.tableOption ?? {},
    'data': crudState.tableData,
    'page': crudState.pageOption,
    'search': crudState.searchForm,
    'defaults': crudState.defaults,
    'before-open': beforeOpen,
    'before-close': beforeClose,
    /** 事件 */
    'onRowSave': handleSave,
    'onRowUpdate': handleUpdate,
    'onRowDel': handleDel,
    'onRefreshChange': getDataList,
    'onSelectionChange': selectionChange,
    'onCurrentChange': pageCurrentChange,
    'onSizeChange': pageSizeChange,
    'onSortChange': sortChange,
    'onSearchChange': searchChange,
    'onSearchReset': searchReset,
    'onUpdate:search': (form: P) => (crudState.searchForm = form),
    'onUpdate:page': (page: PageOption) => (crudState.pageOption = page as Required<PageOption>),
    'onUpdate:modelValue': (form: T) => (crudState.formData = form),
    'onUpdate:defaults': (defaults: AvueCrudDefaults) => (crudState.defaults = defaults),
  }))

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
    beforeSubmit,
    afterSubmit,
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
    afterClose: afterCloseHook,
  }
}
