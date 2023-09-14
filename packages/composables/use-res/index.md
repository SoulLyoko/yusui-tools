# useRes

扩展useRequest
- res: 支持通过属性路径获取数据
- modify: 支持返回一个可传入修改配置的函数

## 基础用法

:::demo
./demo
:::

## UseResOptions

| 名称       | 类型    | 默认值 | 说明                     |
| ---------- | ------- | ------ | ------------------------ |
| ...options | Options |        | vue-request的参数        |
| res        | String  |        | 获取请求数据属性路径     |
| modify     | Boolean | false  | 返回可传入修改配置的函数 |

## 具体实现

<<<./index.ts
