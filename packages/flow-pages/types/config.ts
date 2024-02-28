import type { AsyncComponentLoader, Component } from 'vue'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { AvueCrudOption } from '@smallwei/avue'
import type { TabsProps } from 'element-plus'
import type { Res } from '@yusui/types'
import type { FlowFile, FlowParamMap } from '../api'
import type { UseFlowFormOptions } from '../composables'
import type { ButtonHandler, FlowFormState } from '../flow-form'

export interface FlowFormTab {
  label?: string
  prop?: string
  disabled?: boolean
  lazy?: boolean
  closable?: boolean
  display?: boolean
  component?: Component
}

export interface FlowPagesConfig {
  /** 流程设计器 */
  FlowDesign?: Component
  /** 表单设计器 */
  FormDesign?: Component
  /** 流程表单 */
  FlowForm?: Component
  /** 审批表单弹窗 */
  ApprovalForm?: Component
  /** 流程表单标签页属性 */
  tabsProps?: Partial<TabsProps>
  /** 流程表单标签页配置 */
  tabs?: FlowFormTab[]
  /** axios实例 */
  request: RequestInstance
  /** 用户信息 */
  userInfo?: { userId?: string | number } | (() => { userId?: string | number })
  /** 自定义表单 */
  customForm?: Record<string, Component | AsyncComponentLoader>
  /** 打开流程表单弹窗的默认配置 */
  useFlowFormOptions?: UseFlowFormOptions
  /** 按钮处理 */
  buttonHandler?: (state: FlowFormState) => ButtonHandler
  /** avue表格统一配置 */
  tableOption?: AvueCrudOption
  /** 上传配置 */
  upload?: {
    /** 上传地址 */
    action?: string
    /** 请求头携带的参数，如token */
    headers?: object | (() => any)
    /** 预览实现函数 */
    preview?: (row: FlowFile, list: FlowFile[]) => any
    /** 下载实现函数 */
    download?: (row: FlowFile, list: FlowFile[]) => any
    /** 与流程文件对接的字段（如有变化则传入修改） */
    props?: {
      /** 文件名 */
      fileName?: string
      /** 文件类型 */
      fileType?: string
      /** 文件大小 */
      fileSize?: string
      /** 文件地址 */
      fileUrl?: string
      /** 上传成功后返回的数据 */
      res?: string
    }
  }
  /** 流程参数 */
  flowParams?: Partial<FlowParamMap>
}

export interface RequestInstance extends AxiosInstance {
  <T = Res>(config: AxiosRequestConfig): Promise<T>
  <T = Res>(url: string, config?: AxiosRequestConfig): Promise<T>
  getUri(config?: AxiosRequestConfig): string
  request<T = Res>(config: AxiosRequestConfig): Promise<T>
  get<T = Res>(url: string, config?: AxiosRequestConfig): Promise<T>
  delete<T = Res>(url: string, config?: AxiosRequestConfig): Promise<T>
  head<T = Res>(url: string, config?: AxiosRequestConfig): Promise<T>
  options<T = Res>(url: string, config?: AxiosRequestConfig): Promise<T>
  post<T = Res>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  put<T = Res>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  patch<T = Res>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  postForm<T = Res>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  putForm<T = Res>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  patchForm<T = Res>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
}
