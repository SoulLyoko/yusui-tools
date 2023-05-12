import type { App } from 'vue'
import type { FlowPagesConfig } from './types'

import {
  FlowButton,
  FlowDefinition,
  FlowDeploy,
  FlowForm,
  FlowManage,
  FlowOps,
  FlowParam,
  FlowTemplate,
  FlowWorkbench,
  FormTemplate,
  TableTemplate,
  useConfigProvider,
} from '.'

export { default as FlowButton } from './pages/flow-button/index.vue'
export { default as FlowDefinition } from './pages/flow-definition/index.vue'
export { default as FlowDeploy } from './pages/flow-deploy/index.vue'
export { default as FlowManage } from './pages/flow-manage/index.vue'
export { default as FlowOps } from './pages/flow-ops/index.vue'
export { default as FlowParam } from './pages/flow-param/index.vue'
export { default as FlowWorkbench } from './pages/flow-workbench/index.vue'
export { default as FlowTemplate } from './pages/flow-template/index.vue'
export { default as FormTemplate } from './pages/form-template/index.vue'
export { default as TableTemplate } from './pages/table-template/index.vue'
export { default as FlowForm } from './flow-form/index.vue'
export * from './composables'
export * from './constants'
export * from './types'

export default {
  install(app: App, config?: FlowPagesConfig) {
    app.component('FlowButton', FlowButton)
      .component('FlowDefinition', FlowDefinition)
      .component('FlowDeploy', FlowDeploy)
      .component('FlowForm', FlowForm)
      .component('FlowManage', FlowManage)
      .component('FlowOps', FlowOps)
      .component('FlowParam', FlowParam)
      .component('FlowTemplate', FlowTemplate)
      .component('FormTemplate', FormTemplate)
      .component('TableTemplate', TableTemplate)
      .component('FlowWorkbench', FlowWorkbench)
    useConfigProvider(app, config)
  },
}
