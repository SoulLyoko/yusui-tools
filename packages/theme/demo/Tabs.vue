<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref('1')

const list = [
  { label: 'Tab 1', name: '1', content: 'Tab 1' },
  { label: 'Tab 2', name: '2', content: 'Tab 2' },
  { label: 'Tab 3', name: '3', content: 'Tab 3', disabled: true },
]

const positions = ['top', 'right', 'bottom', 'left']
const tabPosition = ref('top' as const)
</script>

<template>
  <h3>基础用法</h3>
  标签方向:
  <el-radio-group v-model="tabPosition">
    <el-radio-button v-for="p in positions" :key="p" :label="p" />
  </el-radio-group>
  <br>
  <br>
  <el-tabs v-model="activeName" :tab-position="tabPosition">
    <el-tab-pane v-for="item in list" :key="item.name" :label="item.label" :name="item.name" :disabled="item.disabled">
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>

  <h3>卡片风格的标签</h3>
  <el-tabs v-model="activeName" type="card" editable>
    <el-tab-pane v-for="item in list" :key="item.name" :label="item.label" :name="item.name" :disabled="item.disabled" closable>
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>

  <h3>带有边框的卡片风格</h3>
  <el-tabs v-model="activeName" type="border-card">
    <el-tab-pane v-for="item in list" :key="item.name" :label="item.label" :name="item.name" :disabled="item.disabled" closable>
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>
</template>
