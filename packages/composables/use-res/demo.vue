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

const useDataWithResPathAndModify = useRes(request, { res: 'data.records' })
const { data: dataWithResPathAndModify, run } = useDataWithResPathAndModify({ manual: true })

const { data: dataWithoutModify } = useRes(request, { res: 'data.records', modify: false })
</script>

<template>
  <div>
    传入属性路径，配置修改为手动执行:
    <el-button type="primary" size="small" icon="el-icon-refresh" @click="run">
      执行
    </el-button>
  </div>
  <div>
    {{ dataWithResPathAndModify }}
  </div>
  <div>
    直接返回结果:
  </div>
  <div>
    {{ dataWithoutModify }}
  </div>
</template>
