<script setup lang="ts">
import { useToggle } from '@vueuse/core'

const list = [
  { label: 'Primary', type: 'primary' as const },
  { label: 'Success', type: 'success' as const },
  { label: 'Info', type: 'info' as const },
  { label: 'Warning', type: 'warning' as const },
  { label: 'Danger', type: 'danger' as const },
]

const [check, toggleCheck] = useToggle()
</script>

<template>
  <h3>基础用法</h3>
  <el-tag v-for="item in list" :key="item.label" :type="item.type" closable effect="dark" style="margin-right:10px">
    {{ item.label }}
  </el-tag>
  <br>
  <el-tag v-for="item in list" :key="item.label" :type="item.type" closable style="margin-right:10px">
    {{ item.label }}
  </el-tag>
  <br>
  <el-tag v-for="item in list" :key="item.label" :type="item.type" closable effect="plain" style="margin-right:10px">
    {{ item.label }}
  </el-tag>

  <h3>尺寸</h3>
  <el-space>
    <el-tag size="large">
      Large
    </el-tag>
    <el-tag>
      Default
    </el-tag>
    <el-tag size="small">
      Small
    </el-tag>
  </el-space>

  <h3>圆形标签</h3>
  <el-space>
    <el-tag size="large" round>
      Large
    </el-tag>
    <el-tag round>
      Default
    </el-tag>
    <el-tag size="small" round>
      Small
    </el-tag>
  </el-space>

  <h3>可选中标签</h3>
  <el-space>
    <el-check-tag v-for="item in list" :key="item.label" :checked="check" :type="item.type" @change="toggleCheck()">
      {{ item.label }}
    </el-check-tag>
  </el-space>
</template>
