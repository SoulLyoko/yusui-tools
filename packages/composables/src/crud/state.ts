import type { AvueCrudOption, PageOption } from "@smallwei/avue";
import type { Data } from "@yusui/types";

import { reactive } from "vue";
import { merge } from "lodash-unified";

import { useMock } from "./mock";

export interface CrudOption<T, P> {
  /** 行键值(id/_id/uuid/...) */
  rowKey: string;
  /** 获取数据列表方法 */
  getList: (() => Promise<any>) | ((params?: P) => Promise<any>) | ((params: P) => Promise<any>);
  /** 添加数据方法 */
  create: (form: T | any) => Promise<any>;
  /** 编辑数据方法 */
  update: (form: T | any) => Promise<any>;
  /** 删除单条数据方法 */
  remove: (id: any) => Promise<any>;
  /** 接口返回数据的路径 */
  dataPath: string;
  /** 接口返回总数的路径 */
  totalPath: string;
  /** 当前页key */
  currKey: string;
  /** 每页条数key */
  sizeKey: string;
  /** 是否携带分页参数 */
  isPage: Boolean;
  /** 是否携带排序参数 */
  isSort: Boolean;
}

export interface SortOption {
  ascs?: string;
  descs?: string;
  order?: "asc" | "desc";
  prop?: string;
}

export interface CrudState<T, P> {
  crudOption: CrudOption<T, P>;
  pageOption: Required<PageOption>;
  sortOption: SortOption;
  tableLoading: boolean;
  tableOption: AvueCrudOption<T>;
  tableData: T[];
  dataSelections: T[];
  searchForm: P;
  queryForm: any;
  formData: T;
  mockData: T[];
  mockCache: string;
}

export interface UseCrudStateOptions<T, P> extends Partial<Omit<CrudState<T, P>, "crudOption" | "pageOption">> {
  crudOption?: Partial<CrudOption<T, P>>;
  pageOption?: PageOption;
}

export function useCrudState<T extends Data, P extends Data>(options: UseCrudStateOptions<T, P>) {
  const crudState = reactive(
    merge(
      {
        crudOption: {
          rowKey: "id", // 行键值(id/_id/uuid/...)
          getList: () => getList(), // 获取数据列表方法
          create: (row: T) => create(row), // 添加数据方法
          update: (row: T) => update(row), // 编辑数据方法
          remove: (ids: string | number) => remove(ids), // 删除单条数据方法
          dataPath: "res.data.records", // 接口返回数据的路径
          totalPath: "res.data.total", // 接口返回总数的路径
          currKey: "current", // 当前页key
          sizeKey: "size", // 每页条数key
          isPage: true, // 是否携带分页参数
          isSort: true // 是否携带排序参数
        },
        pageOption: {
          total: 0, // 总条数
          currentPage: 1, // 当前页数
          pageSize: 10 // 每页显示条数
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
        mockData: [], // 假数据
        mockCache: "" // 将假数据存在缓存中使用的key
      },
      options
    )
  ) as CrudState<T, P>;

  const { getList, create, update, remove } = useMock({ crudState });

  return crudState;
}
