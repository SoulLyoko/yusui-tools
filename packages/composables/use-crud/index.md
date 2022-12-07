# useCrud

应用于 AvueCrud 组件的快速增删改查

## 基础用法

<script setup>
import Demo from "./demo.vue"
</script>

<Demo></Demo>

<<< @/composables/use-crud/demo.vue

## Options

| 名称              | 类型     | 默认值                | 说明                                     |
| ----------------- | -------- | --------------------- | ---------------------------------------- |
| crudOption        | Object   |                       | 增删改查配置,[详细说明](#crudoption)     |
| pageOption        | Object   |                       | 分页配置,[详细说明](#pageoption)         |
| sortOption        | Object   | {descs:"create_time"} | 排序配置,可选`{['descs'\|'ascs']:$prop}` |
| tableLoading      | Boolean  | false                 | 数据加载状态                             |
| tableOption       | Object   | {}                    | 表格配置项                               |
| tableData         | Array    | []                    | 数据列表                                 |
| dataSelections    | Array    | []                    | 已选择数据列表                           |
| searchForm        | Object   | {}                    | 搜索条件                                 |
| queryForm         | Object   | {}                    | 固定查询条件,不会被清空重置              |
| formData          | Object   | {}                    | 表单数据                                 |
| mockData          | Array    | []                    | 模拟数据                                 |
| mockCache         | String   | ""                    | 将假数据存在缓存中使用的 key             |
| getDataList       | Function |                       | 获取数据列表方法,传入则覆盖内部实现      |
| handleSave        | Function |                       | 数据添加方法,传入则覆盖内部实现          |
| handleUpdate      | Function |                       | 数据更新方法,传入则覆盖内部实现          |
| handleDel         | Function |                       | 删除行方法,传入则覆盖内部实现            |
| batchDel          | Function |                       | 批量删除方法,传入则覆盖内部实现          |
| searchChange      | Function |                       | 搜索回调,传入则覆盖内部实现              |
| searchReset       | Function |                       | 搜索重置回调,传入则覆盖内部实现          |
| selectionChange   | Function |                       | 多选回调,传入则覆盖内部实现              |
| pageSizeChange    | Function |                       | 切换每页条数回调,传入则覆盖内部实现      |
| pageCurrentChange | Function |                       | 切换当前页回调,传入则覆盖内部实现        |
| sortChange        | Function |                       | 切换排序回调,传入则覆盖内部实现          |
| beforeOpen        | Function |                       | 打开表单弹窗前,传入则覆盖内部实现        |
| beforeClose       | Function |                       | 关闭表单弹窗前,传入则覆盖内部实现        |

## CrudOption

| 名称       | 类型     | 默认值                   | 说明                     |
| ---------- | -------- | ------------------------ | ------------------------ |
| rowKey     | String   | tableOption.rowKey??"id" | 行键值(id/\_id/uuid/...) |
| getList    | Function | 获取模拟数据             | 获取数据列表方法         |
| create     | Function | 新增模拟数据             | 添加数据方法             |
| update     | Function | 更新模拟数据             | 编辑数据方法             |
| remove     | Function | 尚处模拟数据             | 删除单条数据方法         |
| dataPath   | String   | "res.data.records"       | 接口返回数据的属性路径   |
| totalPath  | String   | "res.data.total"         | 接口返回总数的属性路径   |
| currKey    | String   | "current"                | 当前页 key               |
| sizeKey    | String   | "size"                   | 每页条数 key             |
| isPage     | Boolean  | true                     | 是否携带分页参数         |
| isSort     | Boolean  | true                     | 是否携带排序参数         |
| delConfirm | Boolean  | true                     | 删除前是否提示确认       |

## PageOption

| 名称        | 类型   | 默认值 | 说明         |
| ----------- | ------ | ------ | ------------ |
| total       | Number | 0      | 总条数       |
| currentPage | Number | 1      | 当前页数     |
| pageSize    | Number | 10     | 每页显示条数 |

## Returns

| 名称           | 类型     | 使用                               | 说明                                         |
| -------------- | -------- | ---------------------------------- | -------------------------------------------- |
| crudRef        | Ref      | `crudRef.value.rowEdit(row)`       | crudRef.value 等同于 vm.$refs.crudRef        |
| crudState      | Reactive | `crudState.tableData=[]`           | [crudState](#crudstate)                      |
| crudStateRefs  | ToRefs   | `const {formData} = crudStateRefs` | [crudStateRefs](#crudstate)                  |
| bindVal        | Computed | `<avue-crud v-bind="bindVal">`     | [使用 v-bind 绑定的值](#bindVal)             |
| getDataList    | Function | `getDataList()`                    | 获取数据列表方法,可被 options 中同名函数覆盖 |
| handleSave     | Function | `handleSave(row)`                  | 数据添加方法,可被 options 中同名函数覆盖     |
| handleUpdate   | Function | `handleUpdate(row)`                | 数据更新方法,可被 options 中同名函数覆盖     |
| handleDel      | Function | `handleDel(row)`                   | 删除行方法,可被 options 中同名函数覆盖       |
| batchDel       | Function | `handleDel(rows)`                  | 批量删除方法,可被 options 中同名函数覆盖     |
| beforeGetList  | Function | `beforeGetList((params)=>{})`      | 获取数据前                                   |
| afterGetList   | Function | `afterGetList((res)=>{})`          | 获取数据后                                   |
| beforeSave     | Function | `beforeSave((row)=>{})`            | 新增数据前，可对 row 内的数据进行修改        |
| afterSave      | Function | `afterSave((res)=>{})`             | 新增数据后                                   |
| beforeUpdate   | Function | `beforeUpdate((row)=>{})`          | 更新数据前，可对 row 内的数据进行修改        |
| afterUpdate    | Function | `afterUpdate((res)=>{})`           | 更新数据后                                   |
| beforeDel      | Function | `beforeDel((row)=>{})`             | 删除数据前                                   |
| afterDel       | Function | `afterDel((res)=>{})`              | 删除数据后                                   |
| beforeBatchDel | Function | `beforeBatchDel((selections)=>{})` | 批量删除前                                   |
| afterBatchDel  | Function | `afterBatchDel((res)=>{})`         | 批量删除后                                   |
| beforeSearch   | Function | `beforeSearch((isReset)=>{})`      | 搜索前(是否重置)                             |
| afterSearch    | Function | `afterSearch((isReset)=>{})`       | 搜索后(是否重置)                             |
| beforeOpen     | Function | `beforeOpen((type)=>{})`           | 打开表单弹窗前(弹窗表单类型)                 |
| afterOpen      | Function | `afterOpen((type)=>{})`            | 打开表单弹窗后(弹窗表单类型)                 |
| beforeClose    | Function | `beforeClose((type)=>{})`          | 关闭表单弹窗前(弹窗表单类型)                 |
| afterClose     | Function | `afterClose((type)=>{})`           | 关闭表单弹窗后(弹窗表单类型)                 |

# CrudState

TODO...

# BindVal

TODO...
