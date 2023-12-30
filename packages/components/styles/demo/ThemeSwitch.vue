<script setup lang="ts">
import { ref } from 'vue'

const theme = ref('element')
const themeList = [
  { key: 'element', title: 'element' },
  { key: 'antd', title: 'antd' },
]

function onChange(val: any) {
  document.documentElement.classList.forEach((item) => {
    if (item.startsWith('theme-'))
      document.documentElement.classList.remove(item)
  })
  document.documentElement.classList.add(`theme-${val}`)
}
</script>

<template>
  <el-affix :offset="100" style="text-align: right;">
    <label style="vertical-align: sub;">选择主题: </label>
    <el-radio-group v-model="theme" @change="onChange">
      <el-radio-button v-for="item in themeList" :key="item.key" :label="item.key">
        {{ item.title }}
      </el-radio-button>
    </el-radio-group>
  </el-affix>
</template>
