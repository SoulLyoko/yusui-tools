import type { UvueFormDefaults } from '../../'
import type { UseCrudOptions } from './types'
import type { Data } from '@yusui/types'

import { computed, ref, toRefs } from 'vue'

import { useHooks } from './hooks'
import { useLifeCycle } from './life-cycle'
import { useCrudMethods } from './methods'
import { useCrudState } from './state'

export * from './hooks'
export * from './life-cycle'
export * from './methods'
export * from './mock'
export * from './state'
export * from './types'

export function useCrud<T extends Data = Data, P extends Data = Data>(options: UseCrudOptions<T, P>) {
  /** listRef.value等同于this.$refs.listRef */
  const listRef = ref()
  /** formRef.value等同于this.$refs.formRef */
  const formRef = ref()

  /** state */
  const crudState = useCrudState(options)
  const crudStateRefs = toRefs(crudState)

  /** hooks */
  const {
    emitter,
    beforeGetList,
    afterGetList,
    beforeDel,
    afterDel,
    beforeGetInfo,
    afterGetInfo,
    beforeSubmit,
    afterSubmit,
  } = useHooks<T, P>()

  /** methods */
  const {
    getDataList,
    handleDel,
    loadMore,
    handleRefresh,
    handleSearch,
    filterChange,
    handleAdd,
    handleEdit,
    handleView,
    getFormData,
    handleSubmit,
    getFormUrl,
    openForm,
  } = useCrudMethods<T, P>({ crudState, emitter, options })

  /** 使用v-bind绑定的值 */
  const bindList = computed(() => ({
    // 属性
    'ref': 'listRef',
    'data': crudState.listData,
    'option': crudState.listOption ?? {},
    'filterForm': crudState.searchForm,
    'status': crudState.loadStatus,
    'scrollTop': crudState.scrollTop,
    'searchValue': crudState.searchForm[crudState.crudOption.searchKey] ?? '',
    // 事件
    'onSearch': handleSearch,
    'onSearchCustom': handleSearch,
    'onSearchClear': handleSearch,
    'onLoadmore': loadMore,
    'onFilterChange': filterChange,
    'onUpdate:filterForm': (form: any) => Object.assign(crudState.searchForm, form),
    'onUpdate:searchValue': (val: any) => (crudState.searchForm[crudState.crudOption.searchKey as keyof P] = val),
  }))
  const bindForm = computed(() => ({
    // 属性
    'ref': 'formRef',
    'option': crudState.formOption ?? {},
    'modelValue': crudState.formData,
    'formType': crudState.formType,
    'defaults': crudState.defaults,
    // 事件
    'onUpdate:modelValue': (form: T) => (crudState.formData = form),
    'onUpdate:defaults': (defaults: UvueFormDefaults<T>) => (crudState.defaults = defaults),
    'onSubmit': handleSubmit,
    'onDel': handleDel,
  }))

  /** 使用一些默认的生命周期 */
  useLifeCycle({ crudState, loadMore, handleRefresh })

  return {
    listRef,
    formRef,
    crudState,
    crudStateRefs,
    bindList,
    bindForm,
    getDataList,
    handleDel,
    loadMore,
    handleRefresh,
    handleSearch,
    filterChange,
    handleAdd,
    handleEdit,
    handleView,
    getFormData,
    handleSubmit,
    getFormUrl,
    openForm,
    beforeGetList,
    afterGetList,
    beforeDel,
    afterDel,
    beforeGetInfo,
    afterGetInfo,
    beforeSubmit,
    afterSubmit,
  }
}
