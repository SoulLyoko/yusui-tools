# flatTree

树扁平化

## 示例

```js
const output = flatTree(input, { childrenKey: "children" });
```

```js
// input:
[
  {
    id: "1",
    parentId: "0",
    children: [
      {
        id: "1-1",
        parentId: "1",
        children: [{ id: "1-1-1", parentId: "1-1" }]
      },
      {
        id: "1-2",
        parentId: "1",
        children: [
          { id: "1-2-1", parentId: "1-2" },
          { id: "1-2-2", parentId: "1-2" }
        ]
      },
      {
        id: "1-3",
        parentId: "1",
        children: [
          { id: "1-3-1", parentId: "1-3" },
          { id: "1-3-2", parentId: "1-3" },
          { id: "1-3-3", parentId: "1-3" }
        ]
      }
    ]
  },
  {
    id: "2",
    parentId: "0",
    children: [
      {
        id: "2-1",
        parentId: "2",
        children: [{ id: "2-1-1", parentId: "2-1" }]
      },
      {
        id: "2-2",
        parentId: "2",
        children: [
          { id: "2-2-1", parentId: "2-2" },
          { id: "2-2-2", parentId: "2-2" }
        ]
      },
      {
        id: "2-3",
        parentId: "2",
        children: [
          { id: "2-3-1", parentId: "2-3" },
          { id: "2-3-2", parentId: "2-3" },
          { id: "2-3-3", parentId: "2-3" }
        ]
      }
    ]
  }
];

// output:
[
  { id: "1", parentId: "0" },
  { id: "1-1", parentId: "1" },
  { id: "1-1-1", parentId: "1-1" },
  { id: "1-2", parentId: "1" },
  { id: "1-2-1", parentId: "1-2" },
  { id: "1-2-2", parentId: "1-2" },
  { id: "1-3", parentId: "1" },
  { id: "1-3-1", parentId: "1-3" },
  { id: "1-3-2", parentId: "1-3" },
  { id: "1-3-3", parentId: "1-3" },
  { id: "2", parentId: "0" },
  { id: "2-1", parentId: "2" },
  { id: "2-1-1", parentId: "2-1" },
  { id: "2-2", parentId: "2" },
  { id: "2-2-1", parentId: "2-2" },
  { id: "2-2-2", parentId: "2-2" },
  { id: "2-3", parentId: "2" },
  { id: "2-3-1", parentId: "2-3" },
  { id: "2-3-2", parentId: "2-3" },
  { id: "2-3-3", parentId: "2-3" }
];
```

## 参数

| 名称           | 说明                        | 类型    | 可选值 | 默认值     |
| -------------- | --------------------------- | ------- | ------ | ---------- |
| childrenKey    | 子节点的名                  | string  | -      | "children" |
| depth          | 起始的深度,影响\_depth 的值 | number  | -      | 0          |
| returnDepth    | 是否返回深度值\_depth       | boolean | -      | false      |
| returnChildren | 是否返回子节点              | boolean | -      | false      |

## 返回值

(Array): 返回一维数组
