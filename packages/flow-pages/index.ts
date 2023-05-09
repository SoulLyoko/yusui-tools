import type { App } from 'vue'
import type { FlowPagesConfig } from './types'

import { merge } from 'lodash-es'

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
} from '.'
import { CONFIG_DEFAULT, CONFIG_PROVIDE_KEY } from './constants'

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

export default {
  install(app: App, config: FlowPagesConfig) {
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
    app.component('FlowWorkbench', FlowWorkbench)
    app.provide(CONFIG_PROVIDE_KEY, merge(CONFIG_DEFAULT, config))
  },
}
