import {
  UvueCascader,
  UvueCheckbox,
  UvueDatetimePicker,
  UvueDict,
  UvueDynamic,
  UvueFilter,
  UvueForm,
  UvueFormItem,
  UvueList,
  UvueRadio,
  UvueSelect,
  UvueSwitch,
} from '.'

export * from './uvue-cascader'
export * from './uvue-checkbox'
export * from './uvue-datetime-picker'
export * from './uvue-dict'
export * from './uvue-dynamic'
export * from './uvue-filter'
export * from './uvue-form'
export * from './uvue-form-item'
export * from './uvue-list'
export * from './uvue-radio'
export * from './uvue-select'
export * from './uvue-switch'

export default {
  UvueCascader,
  UvueCheckbox,
  UvueDatetimePicker,
  UvueDict,
  UvueDynamic,
  UvueForm,
  UvueFormItem,
  UvueList,
  UvueRadio,
  UvueSelect,
  UvueSwitch,
  UvueFilter,
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UvueCascader: typeof UvueCascader
    UvueCheckbox: typeof UvueCheckbox
    UvueDatetimePicker: typeof UvueDatetimePicker
    UvueDict: typeof UvueDict
    UvueDynamic: typeof UvueDynamic
    UvueForm: typeof UvueForm
    UvueFormItem: typeof UvueFormItem
    UvueList: typeof UvueList
    UvueRadio: typeof UvueRadio
    UvueSelect: typeof UvueSelect
    UvueSwitch: typeof UvueSwitch
    UvueFilter: typeof UvueFilter
  }
}
