import type { Res } from "@yusui/types";
import type { AxiosRequestConfig, AxiosInstance } from "axios";
// import type { UseAxiosOptions } from "@vueuse/integrations/useAxios";

import { ElMessage } from "element-plus";
import axios from "axios";
// import { useAxios } from "@vueuse/integrations/useAxios";
// import { get } from "lodash-es";
export { useRequest } from "vue-request";

export const request = axios.create() as RequestInstance;

request.interceptors.response.use(response => {
  const res = response.data;
  if (res.code !== 200) {
    ElMessage.error(res.msg);
    return Promise.reject(res.msg);
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

// export function useRequest<T>(
//   url: string,
//   config?: AxiosRequestConfig<T> & { dataPath?: string },
//   options?: UseAxiosOptions<T>
// ) {
//   const instance = request as RequestInstance;
//   if (config?.dataPath) {
//     config.transformResponse = res => {
//       res = JSON.parse(res);
//       return { ...res, data: get({ res }, config.dataPath!) };
//     };
//   }
//   const args = [];
//   args.push(url);
//   config && args.push(config);
//   args.push(instance);
//   options && args.push(options);
//   return useAxios<T>(...(args as Parameters<typeof useAxios>));
// }
