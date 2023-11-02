import type { Data } from '@yusui/types'
import type { CrudState } from './types'

import { watch } from 'vue'
import { omit, orderBy } from 'lodash-unified'
import { uuid } from '@yusui/utils'

export function useMock<T extends Data, P extends Data>({ crudState }: { crudState: CrudState<T, P> }) {
  if (crudState.mockCache) {
    try {
      const cachePrefix = 'mock'
      const cacheKey = `${cachePrefix}-${crudState.mockCache}`
      const cacheData = localStorage.getItem(cacheKey)
      crudState.mockData = cacheData ? JSON.parse(cacheData) : crudState.mockData
      watch(
        () => crudState.mockData,
        () => localStorage.setItem(cacheKey, JSON.stringify(crudState.mockData)),
        { immediate: true, deep: true },
      )
    }
    catch (error) {
      console.log(error)
    }
  }
  function getList(params: P) {
    const { currKey, sizeKey } = crudState.crudOption
    const current = params[currKey]
    const size = params[sizeKey]
    const { descs, ascs /** , order, prop */ } = params
    const searchForm = omit(params, [currKey, sizeKey, 'descs', 'ascs'])
    const filterData = crudState.mockData.filter((item) => {
      return Object.entries(searchForm).every(([key, value]) => {
        if (typeof item[key] === 'string')
          return item[key].includes(value)
        else
          return item[key] === value
      })
    })
    // const orderData = orderBy(filterData, prop, order);
    const orderData = orderBy(filterData, descs || ascs || undefined, descs ? 'desc' : ascs ? 'asc' : undefined)
    const pageData = orderData.filter((item, index) => {
      return index >= (current - 1) * size && index < current * size
    })
    return Promise.resolve({
      code: 200,
      msg: '操作成功',
      data: {
        records: pageData,
        total: filterData.length,
      },
    })
  }
  function create(row: T) {
    const {
      crudOption: { rowKey },
    } = crudState
    crudState.mockData.push({ [rowKey]: uuid(16, 10), ...row })
    return Promise.resolve({ code: 200, msg: '操作成功' })
  }
  function update(row: T) {
    const {
      crudOption: { rowKey },
    } = crudState
    crudState.mockData = crudState.mockData.map((item) => {
      if (item[rowKey] === row[rowKey])
        return row
      else
        return item
    })
    return Promise.resolve({ code: 200, msg: '操作成功' })
  }
  function remove(ids: string | number) {
    const {
      crudOption: { rowKey },
    } = crudState
    if (typeof ids === 'string') {
      const idsArr = ids.split(',')
      crudState.mockData = crudState.mockData.filter((item) => {
        return !idsArr.includes(item[rowKey])
      })
    }
    else {
      crudState.mockData = crudState.mockData.filter(item => ids !== item[rowKey])
    }
    return Promise.resolve({ code: 200, msg: '操作成功' })
  }

  return { getList, create, update, remove }
}
