import type { Res } from "@yusui/types";
import type { AxiosRequestConfig, AxiosInstance } from "axios";

import { ElMessage } from "element-plus";
import axios from "axios";

export const request = axios.create() as RequestInstance;

request.interceptors.response.use(response => {
  const res = response.data;
  if (res.code !== 200) {
    ElMessage.error(res.msg);
  }
  return res;
});

export interface RequestInstance extends AxiosInstance {
  <T = Res>(config: AxiosRequestConfig): Promise<T>;
  <T = Res>(url: string, config?: AxiosRequestConfig): Promise<T>;
  request<T = Res>(config: AxiosRequestConfig): Promise<T>;
  get<T = Res>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete<T = Res>(url: string, config?: AxiosRequestConfig): Promise<T>;
  head<T = Res>(url: string, config?: AxiosRequestConfig): Promise<T>;
  options<T = Res>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = Res>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  put<T = Res>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  patch<T = Res>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}
