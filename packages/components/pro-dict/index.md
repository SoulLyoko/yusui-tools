# ProDict

基于`useDict`的字典组件

使用前全局注入请求实例，就不用每次都传入请求实例了

```ts
// main.ts
import { useDictConfigProvider } from '@yusui/composables'

import { request } from '@/api'

useDictConfigProvider({ request })
```

## 基础用法

:::demo
./demo
:::

## ProDictProps

| 名称         | 类型                  | 默认值   | 说明                                          |
| ------------ | --------------------- | -------- | --------------------------------------------- |
| v-model      |                       |          | 绑定值                                        |
| type         | ProDictType           | 'select' | 组件类型                                      |
| multiple     | Boolean               |          | 是否多选                                      |
| button       |                       |          | radio,checkbox是否显示为按钮                  |
| border       |                       |          | radio,checkbox是否显示边框                    |
| request      | AxiosInstance         |          | 请求实例，可通过useDictConfigProvider全局注入 |
| props        | [DicProps](#dicprops) |          | 字典属性配置                                  |
| dicData      | Array                 |          | 静态字典项                                    |
| dicUrl       | String                |          | 字典请求接口地址                              |
| dicQuery     | Object                |          | 字典请求参数                                  |
| dicHeaders   | Object                |          | 字典请求头                                    |
| dicFormatter | (res) => Array        |          | 字典请求返回数据格式化                        |
| dicMethod    | String                | 'get'    | 字典请求方式                                  |

## DicProps

| 名称     | 类型   | 默认值     | 说明                                     |
| -------- | ------ | ---------- | ---------------------------------------- |
| label    | String | 'label'    | 字典标题属性名                           |
| value    | String | 'value'    | 字典值属性名                             |
| children | String | 'children' | 字典子项属性名                           |
| disabled | String | 'disabled' | 字典禁用项属性名                         |
| res      | String | 'data'     | 字典请求返回的数据结构(如'data.records') |

## 类型定义

<<< ./types/index.ts
