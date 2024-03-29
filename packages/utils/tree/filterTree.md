# filterTree

过滤树节点

## 示例

```js
const output = filterTree(input, node => node.id === '1-1-1', { childrenKey: 'children' })
```

```js
// input:
[
  {
    id: '1',
    parentId: '0',
    children: [
      {
        id: '1-1',
        parentId: '1',
        children: [{ id: '1-1-1', parentId: '1-1' }]
      },
      {
        id: '1-2',
        parentId: '1',
        children: [
          { id: '1-2-1', parentId: '1-2' },
          { id: '1-2-2', parentId: '1-2' }
        ]
      }
    ]
  }
];

// output:
[
  {
    id: '1-1-1',
    parentId: '1-1'
  }
]
```

## 参数

| 名称    | 说明     | 类型              | 可选值 | 默认值 |
| ------- | -------- | ----------------- | ------ | ------ |
| tree    | 树数据   | Array             | -      | -      |
| fn      | 过滤函数 | (node) => boolean | -      | -      |
| options | 参数配置 | FilterTreeOptions | -      | -      |

## FilterTreeOptions

| 名称        | 说明       | 类型    | 可选值 | 默认值     |
| ----------- | ---------- | ------- | ------ | ---------- |
| childrenKey | 子节点的名 | string  | -      | "children" |
| flat        | 是否扁平化 | boolean | -      | false      |

## 返回值

(Array): 返回过滤出的节点数组
