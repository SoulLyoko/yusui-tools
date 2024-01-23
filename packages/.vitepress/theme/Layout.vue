<script setup>
import DefaultTheme from 'vitepress/theme'

import { useComponentTheme } from '../../components'

const { Layout } = DefaultTheme

const { theme, themes } = useComponentTheme()
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <el-divider direction="vertical" />
      <label>组件主题：</label>
      <el-select v-model="theme" style="width:100px;">
        <el-option v-for="item in themes" :key="item" :label="item" :value="item" />
      </el-select>
    </template>
  </Layout>
</template>
