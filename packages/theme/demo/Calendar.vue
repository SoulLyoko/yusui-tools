<script setup lang="ts">
import { ref } from 'vue'

const value = ref(new Date())
</script>

<template>
  <el-calendar v-model="value">
    <template #date-cell="{ data: { day, isSelected } }">
      <div style="text-align: right;">
        {{ day.split('-').pop() }}
      </div>
      <el-tag v-if="isSelected">
        09:00
      </el-tag>
    </template>
  </el-calendar>
</template>

<style lang="scss">
.el-calendar {
  table {
    display: table;
    margin: unset;
  }
  th {
    border: inherit;
    background-color: unset;
    text-align: center;
  }
  td {
    padding: 0;
  }
  tr {
    border-top: none;
  }
  tr:nth-child(2n) {
    background-color: unset;
  }
}
</style>
