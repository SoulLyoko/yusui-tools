import type { PropType } from 'vue'
import type { UvueFormDefaults, UvueFormOption } from '../types'

export const formProps = {
  modelValue: { type: Object, default: () => ({}) },
  option: { type: Object as PropType<UvueFormOption>, default: () => ({}) },
  defaults: { type: Object as PropType<UvueFormDefaults>, default: () => ({}) },
  permission: { type: Object as PropType<UvueFormOption>, default: () => ({}) },
  formType: { type: String as PropType<'add' | 'edit' | 'view'> },
}
