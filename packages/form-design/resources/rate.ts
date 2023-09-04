import type { Resource } from '../types'

import { iconList } from '../options'
import { EditorSetter, SwitchSetter } from '../setters'

export const rate: Resource = {
  name: 'rate',
  title: '评分',
  icon: 'el-icon-star',
  group: '表单组件',
  props: { type: 'rate', label: '评分', max: 5, lowThreshold: 2, highThreshold: 4 },
  settings: [
    {
      label: '是否允许半选',
      prop: 'allowHalf',
      component: SwitchSetter,
      defaultValue: false,
    },
    {
      label: '最大分值',
      prop: 'max',
      type: 'number',
    },
    {
      label: '低分界限值',
      prop: 'lowThreshold',
      type: 'number',
      labelTip: '低分和中等分数的界限值，值本身被划分在低分中',
    },
    {
      label: '高分界限值',
      prop: 'highThreshold',
      type: 'number',
      labelTip: '高分和中等分数的界限值，值本身被划分在高分中',
    },
    {
      label: '颜色数组',
      prop: 'colors',
      component: EditorSetter,
      valueType: 'object',
      tooltip: true,
      defaultValue: '[]',
      labelTip:
        '若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色',
    },
    {
      label: '未选中颜色',
      prop: 'voidColor',
      type: 'color',
    },
    {
      label: '未选颜色(禁用)',
      prop: 'disabledVoidColor',
      type: 'color',
      labelWidth: 110,
    },
    {
      label: '图标数组',
      prop: 'icons',
      component: EditorSetter,
      valueType: 'object',
      tooltip: true,
      defaultValue: '[]',
      labelTip:
        '若传入数组，则需要传入 3 个元素，分别为 3 个部分所对应的图标；若传入对象，则可自定义分段，键名为分段的界限值，键值为对应的图标',
    },
    {
      label: '未选中图标',
      prop: 'voidIcon',
      type: 'icon',
      iconList,
    },
    {
      label: '未选图标(禁用)',
      prop: 'disabledVoidIcon',
      type: 'icon',
      iconList,
      labelWidth: 110,
    },
    {
      label: '显示辅助文字',
      prop: 'showText',
      component: SwitchSetter,
      defaultValue: false,
      labelWidth: 120,
      labelTip: '是否显示辅助文字，若为是，则会从 辅助文字数组 中选取当前分数对应的文字内容',
    },
    {
      label: '辅助文字数组',
      prop: 'texts',
      type: 'array',
      labelWidth: 120,
      labelTip: '通过设置辅助文字数组可以为每一个分值指定对应的辅助文字',
    },
    {
      label: '显示当前分数',
      prop: 'showScore',
      component: SwitchSetter,
      defaultValue: false,
      labelWidth: 120,
      labelTip: '是否显示当前分数，当前分数 和 辅助文字 不能同时显示',
    },
    {
      label: '分数显示模板',
      prop: 'scoreTemplate',
      labelWidth: 120,
      labelTip: '模板为一个包含了 {value} 的字符串，{value} 会被替换为当前分值。如: "当前分数：{value}"',
    },
  ],
}
