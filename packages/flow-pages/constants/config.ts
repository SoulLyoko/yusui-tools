import type { FlowPagesConfig } from '../types'
import type { InjectionKey } from 'vue'

import { defineAsyncComponent } from 'vue'

import FlowForm from '../flow-form/index.vue'
import InternalForm from '../flow-form/components/internal-form.vue'
import UploadTable from '../flow-form/components/upload-table.vue'
import FlowTrack from '../flow-form/components/flow-track.vue'

export const CONFIG_PROVIDE_KEY: InjectionKey<FlowPagesConfig> = Symbol('flowPagesConfig')

export const CONFIG_DEFAULT: FlowPagesConfig = {
  FlowDesign: defineAsyncComponent(() => import('@yusui/flow-design').then(m => m.FlowDesign)),
  FormDesign: defineAsyncComponent(() => import('@yusui/form-design').then(m => m.FormDesign)),
  FlowForm,
  tabs: [
    { label: '审批表单', prop: 'formTab', component: InternalForm },
    { label: '附件资料', prop: 'fileTab', component: UploadTable },
    { label: '流程跟踪', prop: 'trackTab', component: FlowTrack },
  ],
  request: (() => { }) as any,
  upload: {
    props: {
      fileName: 'fileOriginalName',
      fileType: 'fileType',
      fileSize: 'fileSize',
      fileUrl: 'fileUrl',
      res: 'res.data',
    },
  },
}
