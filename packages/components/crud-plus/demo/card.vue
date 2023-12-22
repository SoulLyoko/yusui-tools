<script setup lang="ts">
import { ref } from 'vue'

import { data, option, page, permission } from './option'

const defaults = ref({})
</script>

<template>
  <CrudPlus
    v-model:defaults="defaults" :data="data" :option="{ ...option, type: 'card' }" :page="page"
    :permission="permission"
  >
    <template #menu-left>
      菜单位置:
      <el-radio-group v-model="option.cardOption!.actionPosition">
        <el-radio label="header">
          头部
        </el-radio>
        <el-radio label="footer">
          底部
        </el-radio>
      </el-radio-group>
      菜单类型:
      <el-radio-group v-model="option.menuType">
        <el-radio label="text">
          文字
        </el-radio>
        <el-radio label="icon">
          图标
        </el-radio>
        <el-radio label="button">
          按钮
        </el-radio>
        <el-radio label="menu">
          下拉
        </el-radio>
      </el-radio-group>
    </template>
    <template #menu-btn>
      <el-dropdown-item icon="el-icon-plus">
        新增下级
      </el-dropdown-item>
    </template>
  </CrudPlus>
</template>
