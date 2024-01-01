<script setup lang="ts">
const activities = [
  {
    content: 'Custom icon',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
    icon: 'el-icon-clock',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Custom size',
    timestamp: '2018-04-03 20:46',
    size: 'large',
  },
  {
    content: 'Custom hollow',
    timestamp: '2018-04-03 20:46',
    type: 'primary',
    hollow: true,
  },
  {
    content: 'Custom center',
    timestamp: '2018-04-03 20:46',
    center: true,
  },
  {
    content: 'Default node',
    timestamp: '2018-04-03 20:46',
  },
]
</script>

<template>
  <h3>基础用法</h3>
  <el-timeline>
    <el-timeline-item v-for="(activity, index) in activities" :key="index" v-bind="activity as any">
      {{ activity.content }}
    </el-timeline-item>
  </el-timeline>
</template>

<style lang="scss">
.el-timeline {
  list-style: none !important;

  li + li {
    margin: 0;
  }
}
</style>
