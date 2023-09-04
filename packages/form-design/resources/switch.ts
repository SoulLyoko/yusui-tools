import type { Resource } from '../types'

import { EditorSetter, SwitchSetter } from '../setters'
import { iconList } from '../options'

const switchs: Resource = {
  name: 'switch',
  title: '开关',
  icon: 'el-icon-switch',
  group: '表单组件',
  props: { type: 'switch', label: '开关' },
  settings: [
    {
      label: '开关数据',
      prop: 'dicData',
      type: 'dynamic',
      labelPosition: 'top',
      children: {
        column: [
          { label: '_index', prop: '_index', hide: true },
          { label: '文字', prop: 'label' },
          {
            label: '值',
            prop: 'value',
            type: 'select',
            filterable: true,
            allowCreate: true,
            defaultFirstOption: true,
            dicData: [
              { label: 'true', value: true },
              { label: 'false', value: false },
            ],
          },
        ],
      },
      value: [
        { label: '', value: false },
        { label: '', value: true },
      ],
    },
    {
      label: '开关宽度',
      prop: 'len',
    },
    {
      label: '文字在点内',
      prop: 'inlinePrompt',
      component: SwitchSetter,
      defaultValue: false,
    },
    {
      label: '开启时图标',
      prop: 'activeIcon',
      type: 'icon',
      iconList,
    },
    {
      label: '关闭时图标',
      prop: 'inactiveIcon',
      type: 'icon',
      iconList,
    },
    {
      label: '开启动作图标',
      prop: 'activeActionIcon',
      type: 'icon',
      iconList,
    },
    {
      label: '关闭动作图标',
      prop: 'inactiveActionIcon',
      type: 'icon',
      iconList,
    },
    {
      label: '改变前钩子',
      prop: 'beforeChange',
      labelTip: '回调 false 则停止切换',
      component: EditorSetter,
      tooltip: true,
      defaultValue: '(cb) => cb(true)',
    },
  ],
}

export { switchs as switch }
