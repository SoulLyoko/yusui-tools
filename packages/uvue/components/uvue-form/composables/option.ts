import type {
  UvueFormColumn,
  UvueFormDefaults,
  UvueFormEmitFn,
  UvueFormGroup,
  UvueFormOption,
  UvueFormProps,
} from '../types'
import type { FormType } from '@smallwei/avue'

import { computed, ref } from 'vue'

import { useConfigProvider } from '../../../composables/config'
import { dateTypes, dicTypes } from '../../../constants'

export const defaultFormColumn: UvueFormColumn = {
  type: 'text',
  display: true,
  addDisplay: true,
  editDisplay: true,
  viewDisplay: true,
  disabled: false,
  addDisabled: false,
  editDisabled: false,
  clearable: true,
}

export const defaultFormGroup: UvueFormGroup = {
  display: true,
  collapse: true,
}

export function handleGroup(group: UvueFormGroup[] = [], formType: FormType) {
  return group.map((g) => {
    return {
      ...defaultFormGroup,
      ...g,
      column: handleColumn(g.column, formType),
    }
  })
}

export function handleColumn(column: UvueFormColumn[] = [], formType: FormType) {
  return column.map((col) => {
    const operation = col.type && [...dateTypes, ...dicTypes].includes(col.type) ? '选择' : '输入'
    const disabledFlags = [!!col.disabled]
    formType === 'add' && disabledFlags.push(!!col.addDisabled)
    formType === 'edit' && disabledFlags.push(!!col.editDisabled)
    formType === 'view' && disabledFlags.push(true)

    const displayFlags = [col.display !== false]
    formType === 'add' && displayFlags.push(col.addDisplay !== false)
    formType === 'edit' && displayFlags.push(col.editDisplay !== false)
    formType === 'view' && displayFlags.push(col.viewDisplay !== false)

    const result = {
      ...defaultFormColumn,
      placeholder: `请${operation} ${col.label}`,
      disabled: disabledFlags.some(bool => bool),
      display: displayFlags.every(bool => bool),
      ...col,
    }

    if (col.type === 'dynamic')
      result.children = handleDynamic(col.children, formType)

    return result
  })
}

export function handleDynamic(dynamic: UvueFormColumn['children'] = {}, formType: FormType) {
  return {
    ...dynamic,
    submitBtn: false,
    emptyBtn: false,
    addBtn: true,
    delBtn: true,
    column: handleColumn(dynamic.column, formType),
  }
}

export function flatGroupColumn({ column, group }: Pick<UvueFormOption, 'group' | 'column'>) {
  return [...column!, ...group!.map(g => g.column!).flat()]
}

export function useOption(props: UvueFormProps, emit: UvueFormEmitFn) {
  const defaultValues = ref({})
  const defaults = ref<UvueFormDefaults>({})
  const globalOption = useConfigProvider()
  const option = computed<UvueFormOption>(() => {
    const result = {
      ...globalOption.formOption,
      ...props.option,
      ...props.permission,
      column: handleColumn(props.option.column, props.formType!),
      group: handleGroup(props.option.group, props.formType!),
    }

    const allColumns = flatGroupColumn(result)
    defaults.value = Object.fromEntries(allColumns.map(col => [col.prop, col]))
    emit('update:defaults', defaults.value)
    defaultValues.value = Object.fromEntries(allColumns.filter(e => 'value' in e).map(col => [col.prop, col.value]))

    return result
  })

  const currentTab = ref(0)
  const currentGroup = computed(() => {
    return option.value.group?.[currentTab.value] ?? []
  })

  return { option, currentTab, currentGroup, defaultValues, defaults }
}
