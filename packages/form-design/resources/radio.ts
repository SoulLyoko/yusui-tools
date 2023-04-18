import type { Resource } from '../types'

import { dic } from '../options'
import { SwitchSetter } from '../setters'

export const radio: Resource = {
  name: 'radio',
  title: '单选框组',
  icon: 'el-icon-circle-check',
  group: '表单组件',
  props: { type: 'radio', label: '单选框组' },
  settings: [
    ...dic,
    {
      label: '边框',
      prop: 'border',
      component: SwitchSetter,
      defaultValue: false,
    },
    {
      label: '按钮',
      prop: 'button',
      component: SwitchSetter,
      defaultValue: false,
    },
  ],
}
