import type { Options, Service } from 'vue-request'
import type { GetFieldType } from '@yusui/types'

import { useRequest } from 'vue-request'
import { get } from 'lodash-unified'

export type QueryResult<R, P extends unknown[]> = ReturnType<typeof useRequest<R, P>>
export type GetReturn<TObject, TPath extends string = string> = string extends TPath ? TObject : GetFieldType<TObject, TPath>

export type UseResOptions<R, P extends unknown[], TPath extends string = string, M extends boolean = true> = Options<GetReturn<R, TPath>, P> & {
  /** 数据路径 */
  res?: TPath
  /**
   * 是否返回修改函数
   * @default true
   */
  modify?: M
}

export type ModifyOptions<R, P extends unknown[], TPath extends string = string> = Omit<UseResOptions<R, P, TPath>, 'res' | 'modify'>
export type ModifyFn<R, P extends unknown[], TPath extends string = string> =
  (modifyOptions?: ModifyOptions<R, P, TPath>) => QueryResult<GetReturn<R, TPath>, P>

export type UseResReturn<R, P extends unknown[], TPath extends string = string, M extends boolean = true> =
  true extends M ? ModifyFn<R, P, TPath> : QueryResult<GetReturn<R, TPath>, P>

/**
 * 不传配置 eg:
 * ```ts
 * const useList = useRes(getList)
 * const { data } = useList({})
 * ```
 */
export function useRes<R, P extends unknown[]>(service: Service<R, P>): UseResReturn<R, P, string, true>
/**
 * 传配置 eg:
 * ```ts
 * const useList = useRes(getList, { res:'data', initialData: [] })
 * const { data } = useList({})
 * ```
 */
export function useRes<R, P extends unknown[], TPath extends string, M extends boolean>(
  service: Service<R, P>,
  options?: UseResOptions<R, P, TPath, M>
): UseResReturn<R, P, TPath, M>
/**
 * 扩展useRequest
 * - 支持通过属性路径获取数据
 * - 默认返回一个可传入修改配置的函数
 */
export function useRes<R, P extends unknown[], TPath extends string, M extends boolean>(
  service: Service<R, P>,
  options?: UseResOptions<R, P, TPath, M>,
) {
  const resPath = options?.res
  const isModify = options?.modify ?? true
  const serviceResolver = (...args: P) => service(...args).then(res => resPath ? get(res, resPath as string) : res)
  const result = (modifyOptions?: ModifyOptions<R, P, TPath>) => useRequest(serviceResolver, { ...options, ...modifyOptions } as ModifyOptions<R, P, TPath>)
  return isModify ? result : result()
}
