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
      <el-radio-group v-model="theme">
        <el-radio-button v-for="item in themes" :key="item" :label="item" />
      </el-radio-group>
    </template>
  </Layout>
</template>
