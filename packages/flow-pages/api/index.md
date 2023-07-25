# API

## 使用

```ts
import { useCommonCommentApi } from '@yusui/flow-pages'

import { request } from '@/api/request'

// 获取常用意见列表
const { useList } = useCommonCommentApi(request)
const { data: commentList } = useList()
```

## 常用意见
<<< ./common-comment.ts

## 流程按钮
<<< ./flow-button.ts

## 流程分类
<<< ./flow-category.ts

## 流程定义
<<< ./flow-definition.ts

## 流程部署
<<< ./flow-deploy.ts

## 流程附件
<<< ./flow-file.ts

## 流程运维
<<< ./flow-ops.ts

## 流程参数
<<< ./flow-param.ts

## 流程运行相关
<<< ./flow-task.ts

## 流程模板
<<< ./flow-template.ts

## 流程用户
<<< ./flow-user.ts

## 表单模板
<<< ./form-template.ts

## 建表设计
<<< ./table-template.ts
