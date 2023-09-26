import type { FlowPagesConfig } from '../types'

import FlowForm from '../flow-form/index.vue'
import InternalForm from '../flow-form/components/InternalForm.vue'
import UploadTable from '../flow-form/components/UploadTable.vue'
import FlowTrack from '../flow-form/components/FlowTrack.vue'

export const CONFIG_DEFAULT: FlowPagesConfig = {
  FlowDesign: {},
  FormDesign: {},
  FlowForm,
  request: {} as any,
  tabs: [
    { label: '审批表单', prop: 'formTab', component: InternalForm },
    { label: '附件资料', prop: 'fileTab', component: UploadTable },
    { label: '流程跟踪', prop: 'trackTab', component: FlowTrack },
  ],
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
  tableOption: {
    align: 'center',
    border: true,
    card: true,
    stripe: true,
    searchMenuSpan: 6,
    span: 24,
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
