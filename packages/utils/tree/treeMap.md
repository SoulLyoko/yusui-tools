# treeMap

创建新的树结构

## 示例

```js
const output = mapTree(
  input,
  (node, index, parent, depth) => ({
    ...node,
    context: { ...node, index, depth }
  }),
  { childrenKey: "children" }
);
```

```js
// input
[
  {
    id: "1",
    parentId: "0",
    children: [
      {
        id: "1-1",
        parentId: "1",
        children: [{ id: "1-1-1", parentId: "1-1" }]
      }
    ]
  }
];

// output:
[
  {
    id: "1",
    parentId: "0",
    context: {
      id: "1",
      parentId: "0",
      index: 0,
      depth: 0
    },
    children: [
      {
        id: "1-1",
        parentId: "1",
        context: {
          id: "1-1",
          parentId: "1",
          index: 0,
          depth: 1
        },
        children: [
          {
            id: "1-1-1",
            parentId: "1-1",
            context: {
              id: "1-1-1",
              parentId: "1-1",
              index: 0,
              depth: 2
            }
          }
        ]
      }
    ]
  }
];
```

## 参数

| 名称    | 说明             | 类型                                | 可选值 | 默认值 |
| ------- | ---------------- | ----------------------------------- | ------ | ------ |
| tree    | 树数据           | Array                               | -      | -      |
| fn      | 返回新结构的函数 | (node, index, parent, depth) => any | -      | -      |
| options | 参数配置         | TreeMapOptions                      | -      | -      |

## TreeMapOptions

| 名称        | 说明       | 类型         | 可选值 | 默认值     |
| ----------- | ---------- | ------------ | ------ | ---------- |
| childrenKey | 子节点的名 | string       | -      | "children" |
| parent      | 父节点     | object\|null | -      | null       |
| depth       | 起始的深度 | number       | -      | 0          |

## 返回值

(Array): 返回新的树结构
