import type { FlowPagesConfig } from '../types'
import type { InjectionKey } from 'vue'

import FlowForm from '../flow-form/index.vue'
import InternalForm from '../flow-form/components/internal-form.vue'
import UploadTable from '../flow-form/components/upload-table.vue'
import FlowTrack from '../flow-form/components/flow-track.vue'

export const CONFIG_PROVIDE_KEY: InjectionKey<FlowPagesConfig> = Symbol('flowPagesConfig')

export const CONFIG_DEFAULT: FlowPagesConfig = {
  FlowDesign: {},
  FormDesign: {},
  FlowForm,
  tabs: [
    { label: '审批表单', prop: 'formTab', component: InternalForm },
    { label: '附件资料', prop: 'fileTab', component: UploadTable },
    { label: '流程跟踪', prop: 'trackTab', component: FlowTrack },
  ],
  request: (() => { }) as any,
  useFlowFormOptions: {
    type: 'drawer',
    window: ['', 'flow-form', 'left=0,top=0,width=1600,height=900'],
    overlay: {
      width: '80%',
      size: '80%',
      top: '100px',
      fullscreen: true,
      destroyOnClose: true,
    },
  },
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
