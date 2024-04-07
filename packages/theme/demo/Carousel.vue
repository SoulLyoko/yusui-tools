<script setup lang="ts">
</script>

<template>
  <h3>基础用法</h3>
  <el-carousel height="200px">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 style="height:100%;text-align:center;background-color:#ccc;">
        {{ item }}
      </h3>
    </el-carousel-item>
  </el-carousel>

  <h3>垂直排列</h3>
  <el-carousel height="200px" direction="vertical">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 style="height:100%;text-align:center;background-color:#ccc;">
        {{ item }}
      </h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style lang="scss">
.el-carousel {
  ul {
    list-style: none;
  }
}
</style>
