import type { FlowPagesConfig } from '../types'
import type { InjectionKey } from 'vue'

export const CONFIG_PROVIDE_KEY: InjectionKey<FlowPagesConfig> = Symbol('flowPagesConfig')

export const CONFIG_DEFAULT: FlowPagesConfig = {
  FlowDesign: null as any,
  FormDesign: null as any,
  request: (() => {}) as any,
  userInfo: {},
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
