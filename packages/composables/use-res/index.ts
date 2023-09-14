import type { Options, Service } from 'vue-request'
import type { GetFieldType } from '@yusui/types'

import { useRequest } from 'vue-request'
import { get } from 'lodash-unified'

export type QueryResult<R, P extends unknown[]> = ReturnType<typeof useRequest<R, P>>
export type GetReturn<TObject, TPath extends string = string> = string extends TPath ? TObject : GetFieldType<TObject, TPath>

export type UseResOptions<R, P extends unknown[], TPath extends string = string, M extends boolean = false> = Options<GetReturn<R, TPath>, P> & {
  res?: TPath
  modify?: M
}
export type UseResReturn<R, P extends unknown[], TPath extends string = string, M extends boolean = false> =
  true extends M ?
      ((modifyOptions?: ModifyOptions<R, P, TPath>) => QueryResult<GetReturn<R, TPath>, P>) :
    QueryResult<GetReturn<R, TPath>, P>
export type ModifyOptions<R, P extends unknown[], TPath extends string = string> = Omit<UseResOptions<R, P, TPath>, 'res' | 'modify'>

/**
 * 不传配置 eg:
 * ```ts
 * const { data } = useRes(getList)
 * ```
 */
export function useRes<R, P extends unknown[]>(service: Service<R, P>): UseResReturn<R, P>
/**
 * 传配置 eg:
 * ```ts
 * const { data } = useRes(getList, { res:'data', initialData: [] })
 * ```
 */
export function useRes<R, P extends unknown[], TPath extends string>(
  service: Service<R, P>,
  options?: UseResOptions<R, P, TPath>
): UseResReturn<R, P, TPath>
/**
 * 返回修改函数 eg:
 * ```ts
 * const useList = useRes(getList, { modify: true })
 * const { data } = useList()
 * ```
 */
export function useRes<R, P extends unknown[], TPath extends string>(
  service: Service<R, P>,
  options?: UseResOptions<R, P, TPath, true>
): (modifyOptions?: ModifyOptions<R, P, TPath>) => UseResReturn<R, P, TPath, false>
/**
 * 扩展useRequest
 * - 支持通过属性路径获取数据
 * - 支持返回一个可传入修改配置的函数
 */
export function useRes<R, P extends unknown[], TPath extends string, M extends boolean>(
  service: Service<R, P>,
  options?: UseResOptions<R, P, TPath, M>,
) {
  const resPath = options?.res
  const isModify = !!options?.modify
  const serviceResolver = (...args: P) => service(...args).then(res => resPath ? get(res, resPath as string) : res)
  const result = (modifyOptions?: ModifyOptions<R, P, TPath>) => useRequest(serviceResolver, { ...options, ...modifyOptions } as ModifyOptions<R, P, TPath>)
  return isModify ? result : result()
}
