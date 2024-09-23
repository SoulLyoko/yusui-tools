# Uvue

- 基于 uni-app 和 uview-plus 封装的 crud 组件
- 以配置的方式渲染列表和表单，实现一次配置，多处复用
- 包含 uvue-list 列表组件、uvue-form 表单组件

# 安装

## npm 安装方式

```sh
pnpm i @yusui/uvue
```

# 快速上手

## 引入 uview

由于组件库依赖于 uview-plus，所以需要先引入 uview-plus，[安装 uview-plus](https://uiadmin.net/uview-plus/components/install.html)

## 注册组件

```ts
import Uvue from '@yusui/uvue'

import request from '@/api'

// main.ts

app.use(Uvue, { request })
```

## 配置 easycom 规则

```json
// pages.json
{
  "easycom": {
    "^uvue(.*)": "@yusui/uvue/components/uvue-$1/uvue-$1.vue"
  }
}
```
