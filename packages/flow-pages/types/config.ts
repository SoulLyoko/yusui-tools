import type { Res } from '@yusui/types'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { FlowFile } from '../api'

export interface FlowPagesConfig {
  request: RequestInstance
  upload: {
    action?: string
    headers?: object
    preview?: (row: FlowFile, list: FlowFile[]) => void
    download?: (row: FlowFile, list: FlowFile[]) => void
    props?: {
      fileName?: string
      fileType?: string
      fileSize?: string
      fileUrl?: string
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
