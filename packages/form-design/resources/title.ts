import type { Resource } from '../types'

import { EditorSetter } from '../setters'

export const title: Resource = {
  name: 'title',
  title: '标题',
  icon: 'el-icon-minus',
  group: '布局组件',
  props: { type: 'title', label: '', labelWidth: 0 },
  settings: [
    {
      label: '标题内容',
      prop: 'modelValue',
      type: 'textarea',
      labelPosition: 'top',
      value: '标题',
    },
    {
      label: '样式',
      prop: 'styles',
      component: EditorSetter,
      valueType: 'object',
      tooltip: true,
      value: { textAlign: 'center' },
    },
  ],
}
