import type { App } from 'vue'

import './styles/index.scss'

import {
  FlowButton,
  FlowDefinition,
  FlowDeploy,
  FlowForm,
  FlowManage,
  FlowOps,
  FlowParam,
  FlowTemplate,
  FormTemplate,
  TableTemplate,
  Workbench,
} from '.'

export { default as FlowButton } from './flow-button/index.vue'
export { default as FlowDefinition } from './flow-definition/index.vue'
export { default as FlowDeploy } from './flow-deploy/index.vue'
export { default as FlowForm } from './flow-form/index.vue'
export { default as FlowManage } from './flow-manage/index.vue'
export { default as FlowOps } from './flow-ops/index.vue'
export { default as FlowParam } from './flow-param/index.vue'
export { default as FlowTemplate } from './flow-template/index.vue'
export { default as FormTemplate } from './form-template/index.vue'
export { default as TableTemplate } from './table-template/index.vue'
export { default as Workbench } from './workbench/index.vue'

export default {
  install(app: App) {
    app.component('FlowButton', FlowButton)
    app.component('FlowDefinition', FlowDefinition)
    app.component('FlowDeploy', FlowDeploy)
    app.component('FlowForm', FlowForm)
    app.component('FlowManage', FlowManage)
    app.component('FlowOps', FlowOps)
    app.component('FlowParam', FlowParam)
    app.component('FlowTemplate', FlowTemplate)
    app.component('FormTemplate', FormTemplate)
    app.component('TableTemplate', TableTemplate)
    app.component('Workbench', Workbench)
  },
}
