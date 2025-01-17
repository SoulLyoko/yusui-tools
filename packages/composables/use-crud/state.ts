/* eslint-disable ts/no-use-before-define */
import type { CrudState, UseCrudStateOptions } from './types'
import type { Data } from '@yusui/types'

import { merge } from 'lodash-es'
import { reactive } from 'vue'

import { useMock } from './mock'

export function useCrudState<T extends Data, P extends Data>(options: UseCrudStateOptions<T, P>) {
  const crudState = reactive(
    merge(
      {
        crudOption: {
          rowKey: options?.tableOption?.rowKey ?? 'id', // 行键值(id/_id/uuid/...)
          getList: (params: P) => getList(params), // 获取数据列表方法
          create: (row: T) => create(row), // 添加数据方法
          update: (row: T) => update(row), // 编辑数据方法
          remove: (ids: string | number) => remove(ids), // 删除数据方法
          dataPath: 'res.data.records', // 接口返回列表数据的路径
          infoPath: 'res.data', // 接口返回详情数据的路径
          totalPath: 'res.data.total', // 接口返回总数的路径
          currKey: 'current', // 当前页key
          sizeKey: 'size', // 每页条数key
          isPage: true, // 是否携带分页参数
          isSort: true, // 是否携带排序参数
          delConfirm: true, // 删除前是否提示确认
          batchDelConfirm: true, // 批量删除前是否提示确认
          clearSelection: true, // 获取数据后是否清除选择
          saveSuccessMsg: '保存成功',
          updateSuccessMsg: '保存成功',
          delSuccessMsg: '删除成功',
        },
        pageOption: {
          total: 0, // 总条数
          currentPage: 1, // 当前页数
          pageSize: 10, // 每页显示条数
        },
        sortOption: {
          // descs: "create_time",
          // ascs: "create_time",
          // order: "desc", // asc正序,desc倒序
          // prop: "createTime", // 排序参数
        },
        tableLoading: false, // 数据加载状态
        tableOption: {}, // 表格配置项
        tableData: [], // 数据列表
        dataSelections: [], // 已选择数据列表
        searchForm: {}, // 搜索条件
        queryForm: {}, // 固定查询条件,不会被清空重置
        formData: {}, // 表单数据
        formType: '', // 弹窗表单类型
        defaults: {}, // 修改配置
        mockData: [], // 假数据
        mockCache: '', // 缓存假数据的key
      },
      options,
    ),
  ) as CrudState<T, P>

  const { getList, create, update, remove } = useMock({ crudState })

  return crudState
}
