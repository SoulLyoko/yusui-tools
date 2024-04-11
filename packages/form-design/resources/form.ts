import type { Resource } from '../types'

import { alignDic, iconList, positionDic, sizeDic } from '../options'
import { EditorSetter, SwitchSetter } from '../setters'

export const form: Resource = {
  name: 'form',
  title: '表单',
  isContainer: true,
  disabledActions: ['copy', 'delete', 'clear'],
  disabledSettings: ['base', 'event', 'advance'],
  settings: [
    {
      label: '表单宽度',
      prop: 'formWidth',
    },
    {
      label: '标签位置',
      prop: 'labelPosition',
      type: 'radio',
      button: true,
      dicData: positionDic,
    },
    {
      label: '标签宽度',
      prop: 'labelWidth',
      labelTip: '"auto"或数字',
    },
    {
      label: '标签后缀',
      prop: 'labelSuffix',
    },
    {
      label: '显示按钮',
      prop: 'menuBtn',
      type: 'switch',
      value: false,
      control(menuBtn: boolean, form: any) {
        if (!menuBtn) {
          form.submitBtn = false
          form.emptyBtn = false
        }
        return {
          submitBtn: { display: menuBtn },
          emptyBtn: { display: menuBtn },
          menuSpan: { display: menuBtn },
          menuPosition: { display: menuBtn },
        }
      },
    },
    {
      label: '显示提交按钮',
      prop: 'submitBtn',
      type: 'switch',
      value: false,
      control(submitBtn: boolean) {
        return {
          submitIcon: { display: !!submitBtn },
          submitText: { display: !!submitBtn },
        }
      },
    },
    {
      label: '提交按钮图标',
      prop: 'submitIcon',
      type: 'icon',
      iconList,
    },
    {
      label: '提交按钮文字',
      prop: 'submitText',
    },
    {
      label: '显示清空按钮',
      prop: 'emptyBtn',
      type: 'switch',
      value: false,
      control(emptyBtn: boolean) {
        return {
          emptyIcon: { display: !!emptyBtn },
          emptyText: { display: !!emptyBtn },
        }
      },
    },
    {
      label: '清空按钮图标',
      prop: 'emptyIcon',
      type: 'icon',
      iconList,
    },
    {
      label: '清空按钮文字',
      prop: 'emptyText',
    },
    {
      label: '按钮栅格',
      prop: 'menuSpan',
      type: 'number',
    },
    {
      label: '按钮位置',
      prop: 'menuPosition',
      type: 'radio',
      button: true,
      dicData: alignDic,
    },
    {
      label: '分组转标签',
      prop: 'tabs',
      component: SwitchSetter,
      defaultValue: false,
    },
    {
      label: '详情模式',
      prop: 'detail',
      component: SwitchSetter,
      defaultValue: false,
    },
    {
      label: '表单只读',
      prop: 'readonly',
      component: SwitchSetter,
      defaultValue: false,
    },
    {
      label: '表单禁用',
      prop: 'disabled',
      component: SwitchSetter,
      defaultValue: false,
    },
    {
      label: '表单项栅格',
      prop: 'span',
      type: 'number',
      value: 24,
    },
    {
      label: '表单项间隔',
      prop: 'gutter',
      type: 'number',
    },
    {
      label: '组件尺寸',
      prop: 'size',
      type: 'radio',
      button: true,
      dicData: sizeDic,
    },
    {
      label: '校验图标',
      prop: 'statusIcon',
      component: SwitchSetter,
      defaultValue: false,
    },
    {
      label: '隐藏星号',
      prop: 'hideRequiredAsterisk',
      component: SwitchSetter,
      defaultValue: false,
    },
    {
      label: '星号的位置',
      prop: 'requireAsteriskPosition',
      type: 'radio',
      button: true,
      dicData: [
        { label: '左', value: 'left' },
        { label: '右', value: 'right' },
      ],
    },
    {
      label: '滚动到错误项',
      prop: 'scrollToError',
      labelWidth: 120,
      labelTip: '当校验失败时，滚动到第一个错误表单项',
      component: SwitchSetter,
      defaultValue: false,
    },
    {
      label: '滚动配置',
      prop: 'scrollIntoViewOptions',
      labelTip: '当校验有失败结果时，滚动到第一个失败的表单项目时的滚动配置 https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView',
      component: EditorSetter,
      tooltip: true,
      defaultValue: '{}',
    },
    {
      label: '样式类',
      prop: 'class',
    },
  ],
}
