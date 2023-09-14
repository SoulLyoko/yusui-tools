<script setup lang="ts">
import { useRes } from '.'

// 模拟请求
async function request() {
  return {
    data: {
      records: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
      ],
    },
  }
}

const { data: dataWithResPath } = useRes(request, {
  res: 'data.records',
})

const useData = useRes(request, {
  res: 'data.records',
  modify: true,
})
const { data: dataWithModifyOptions } = useData({ initialData: [] })
</script>

<template>
  <div>
    传入属性路径获取数据: {{ dataWithResPath }}
  </div>
  <div>
    返回可传入修改配置的函数，执行后获取数据: {{ dataWithModifyOptions }}
  </div>
</template>
