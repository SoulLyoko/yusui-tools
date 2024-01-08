<script setup lang="ts">
import { useComponentTheme } from '..'

const theme = useComponentTheme()

const themeList = [
  { key: 'element', title: 'element' },
  { key: 'antd', title: 'antd' },
]
</script>

<template>
  <el-affix :offset="100" style="text-align: right;">
    <label style="vertical-align: sub;">选择主题: </label>
    <el-radio-group v-model="theme">
      <el-radio-button v-for="item in themeList" :key="item.key" :label="item.key">
        {{ item.title }}
      </el-radio-button>
    </el-radio-group>
  </el-affix>
</template>
