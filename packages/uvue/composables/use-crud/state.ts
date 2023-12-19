import type { Data } from '@yusui/types'
import type { CrudState, UseCrudStateOptions } from './types'

import { reactive } from 'vue'
import { merge } from 'lodash-es'

export function useCrudState<T = Data, P = Data>(options: UseCrudStateOptions<T, P>) {
  const listState = reactive(
    merge(
      {
        crudOption: {
          rowKey: options.listOption?.rowKey ?? options.formOption?.rowKey ?? 'id', // 行键值(id/_id/uuid/...)
          searchKey: '', // 搜索栏绑定的字段
          getList: null, // 获取数据列表方法
          getInfo: null, // 获取表单数据方法
          create: null, // 添加数据方法
          update: null, // 编辑数据方法
          remove: null, // 删除数据方法
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
          order: 'desc', // asc正序,desc倒序
          prop: 'createTime', // 排序参数
        },
        loadStatus: 'loadmore', // 加载状态
        queryForm: {}, // 必传查询条件
        searchForm: {}, // 查询条件
        listData: [], // 数据列表
        scrollTop: 0, // 距离顶部距离，在onPageScroll中获取
        formOption: {},
        formData: {}, // 表单数据
        formType: options.formType || '', // add,edit,view
      },
      options,
    ),
  ) as CrudState<T, P>

  return listState
}
