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
          rowKey: options.listOption?.rowKey ?? options.formOption?.rowKey ?? 'id', // 行键值(id/_id/uuid/...)
          searchKey: '', // 搜索栏绑定的字段
          getInfo: null, // 获取表单数据方法
          getList: (params: P) => getList(params), // 获取数据列表方法
          create: (row: T) => create(row), // 添加数据方法
          update: (row: T) => update(row), // 编辑数据方法
          remove: (ids: string | number) => remove(ids), // 删除数据方法
          dataPath: 'res.data.records', // 接口返回数据的路径
          totalPath: 'res.data.total', // 接口返回总数的路径
          currKey: 'current', // 当前页key
          sizeKey: 'size', // 每页条数key
          formPath: '', // 跳转到表单页的路径
          formKeys: [], // 跳转到表单携带的参数
          isPage: true, // 是否分页
          isSort: true, // 搜否排序
          isReachBottom: true, // 是否触底加载更多数据
          isPullDown: true, // 是否下拉刷新，需要在pages配置中开启enablePullDownRefresh
          isSrollTop: true, // 是否显示返回顶部按钮
          submitBack: true, // 提交后是否返回
          delConfirm: true, // 删除前是否提示确认
          delBack: true, // 表单删除后是否返回
          saveSuccessMsg: '保存成功',
          updateSuccessMsg: '保存成功',
          delSuccessMsg: '删除成功',
        },
        // 分页
        pageOption: {
          total: 0, // 总条数
          currentPage: 1, // 当前页数
          pageSize: 10, // 每页显示多少条
        },
        // 排序
        sortOption: {
          // order: 'desc', // asc正序,desc倒序
          // prop: 'createTime', // 排序参数
        },
        loadStatus: 'loadmore', // 加载状态
        queryForm: {}, // 必传查询条件
        searchForm: {}, // 查询条件
        listData: [], // 数据列表
        scrollTop: 0, // 距离顶部距离，在onPageScroll中获取
        formOption: {},
        formData: {}, // 表单数据
        formType: options.formType || '', // add,edit,view
        defaults: {}, // 修改表单配置
        mockData: [], // 假数据
        mockCache: '', // 缓存假数据的key
      },
      options,
    ),
  ) as CrudState<T, P>

  const { getList, create, update, remove } = useMock({ crudState })

  return crudState
}
