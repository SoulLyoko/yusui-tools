<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')

const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
]

const week = ref('')
const month = ref('')
const year = ref('')
const dates = ref('')

const daterange = ref('')
const monthrange = ref('')

const datetime = ref('')
const datetimerange = ref('')
</script>

<template>
  <h3>选择某一天</h3>
  <el-date-picker v-model="value" :shortcuts="shortcuts" type="date" placeholder="Pick a day" clearable />

  <h3>其他日期单位</h3>
  <el-space direction="vertical">
    <el-date-picker v-model="week" type="week" format="[Week] ww" placeholder="Pick a week" />
    <el-date-picker v-model="month" type="month" placeholder="Pick a month" />
    <el-date-picker v-model="year" type="year" placeholder="Pick a year" />
    <el-date-picker v-model="dates" type="dates" placeholder="Pick one or more dates" />
  </el-space>

  <h3>选择一段时间</h3>
  <el-date-picker v-model="daterange" type="daterange" start-placeholder="Start date" end-placeholder="End date" />

  <h3>选择月份范围</h3>
  <el-date-picker v-model="monthrange" type="monthrange" start-placeholder="Start month" end-placeholder="End month" />

  <h3>日期和时间点</h3>
  <el-date-picker v-model="datetime" type="datetime" placeholder="Select date and time" />

  <h3>日期和时间范围</h3>
  <el-date-picker
    v-model="datetimerange" type="datetimerange" start-placeholder="Start date"
    end-placeholder="End date"
  />
</template>
