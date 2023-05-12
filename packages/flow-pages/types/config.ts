import type { Component } from 'vue'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { Res } from '@yusui/types'
import type { FlowFile } from '../api'

export interface FlowPagesConfig {
  /** 流程设计器 */
  FlowModeler: Component
  /** 流程查看器 */
  FlowViewer: Component
  /** 表单设计器 */
  FormDesign: Component
  /** axios实例 */
  request: RequestInstance
  upload: {
    /** 上传地址 */
    action?: string
    /** 请求头携带的参数，如token */
    headers?: object
    /** 预览实现函数 */
    preview?: (row: FlowFile, list: FlowFile[]) => void
    /** 下载实现函数 */
    download?: (row: FlowFile, list: FlowFile[]) => void
    /** 与流程文件对接的字段（如有变化则传入修改） */
    props?: {
      /**
       * 文件名
       * @default fileOriginalName
       */
      fileName?: string
      /**
       * 文件类型
       * @default fileType
       */
      fileType?: string
      /**
       * 文件大小
       * @default fileSize
       */
      fileSize?: string
      /**
       * 文件地址
       * @default fileUrl
       */
      fileUrl?: string
      /**
       * 上传成功后返回的数据
       * @default res.data
       */
      res?: string
    }
  }
}

export interface RequestInstance extends AxiosInstance {
  <T = Res>(config: AxiosRequestConfig): Promise<T>
  <T = Res>(url: string, config?: AxiosRequestConfig): Promise<T>
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
