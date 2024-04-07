<script setup>
import DefaultTheme from 'vitepress/theme'

import { useTheme } from '../../theme'

const { Layout } = DefaultTheme

const { theme, themes } = useTheme()
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <el-divider direction="vertical" />
      <label>组件主题：</label>
      <el-select v-model="theme" style="width:150px;">
        <el-option v-for="item in themes" :key="item" :label="item" :value="item" />
      </el-select>
    </template>
  </Layout>
</template>
