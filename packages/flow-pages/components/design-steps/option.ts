import type { AvueFormOption } from '@smallwei/avue'
import type { FlowDefinition, FlowDeploy } from '@yusui/flow-pages'

export const formOption: AvueFormOption<FlowDefinition | FlowDeploy> = {
  menuBtn: false,
  span: 24,
  column: [
    {
      label: '流程名称',
      prop: 'flowName',
      rules: [{ required: true, message: '请输入流程名称' }],
    },
    {
      label: '流程标识',
      prop: 'flowKey',
      editDisabled: true,
      rules: [{ required: true, message: '请输入流程标识' }],
    },
    {
      label: '流程分类',
      prop: 'categoryId',
      type: 'select',
      dicUrl: '/sapier-flow/flow-category/list',
      dicQuery: { size: -1 },
      props: { label: 'name', value: 'id' },
    },
    {
      label: '流程图标',
      prop: 'flowIcon',
      component: 'icon-select',
    },
    {
      label: '流程描述',
      prop: 'remarks',
    },
    {
      label: '自定义表单',
      prop: 'formPath',
    },
    {
      label: '关联表',
      prop: 'formDataTable',
      type: 'select',
      filterable: true,
      allowCreate: true,
      defaultFirstOption: true,
      dicUrl: '/sapier-flow/dev-table/list',
      dicQuery: { size: -1 },
      props: { label: 'tableComment', value: 'tableName', desc: 'tableName', res: 'data.records' },
    },
    {
      label: '排序',
      prop: 'sort',
      type: 'number',
      width: 110,
    },
    {
      label: '表单设计',
      prop: 'formOption',
      display: false,
      hide: true,
    },
    {
      label: '模型设计',
      prop: 'flowData',
      display: false,
      hide: true,
    },
  ],
}
