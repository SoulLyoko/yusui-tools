<script setup lang="ts">
const list = [
  { label: 'Default', type: 'default' as const },
  { label: 'Primary', type: 'primary' as const },
  { label: 'Success', type: 'success' as const },
  { label: 'Info', type: 'info' as const },
  { label: 'Warning', type: 'warning' as const },
  { label: 'Danger', type: 'danger' as const },
]
</script>

<template>
  <h3>基础用法</h3>
  <el-button v-for="item in list" :key="item.label" :type="item.type">
    {{ item.label }}
  </el-button>
  <br>
  <br>
  <el-button v-for="item in list" :key="item.label" :type="item.type" plain>
    {{ item.label }}
  </el-button>
  <br>
  <br>
  <el-button v-for="item in list" :key="item.label" :type="item.type" round>
    {{ item.label }}
  </el-button>
  <br>
  <br>
  <el-button v-for="item in list" :key="item.label" :type="item.type" circle icon="el-icon-plus" />
  <br>
  <br>
  <el-button v-for="item in list" :key="item.label" :type="item.type" text>
    {{ item.label }}
  </el-button>
  <br>
  <br>
  <el-button v-for="item in list" :key="item.label" :type="item.type" link>
    {{ item.label }}
  </el-button>

  <h3>禁用状态</h3>
  <el-button v-for="item in list" :key="item.label" :type="item.type" disabled>
    {{ item.label }}
  </el-button>
  <br>
  <br>
  <el-button v-for="item in list" :key="item.label" :type="item.type" plain disabled>
    {{ item.label }}
  </el-button>
  <br>
  <br>
  <el-button v-for="item in list" :key="item.label" :type="item.type" text disabled>
    {{ item.label }}
  </el-button>
  <br>
  <br>
  <el-button v-for="item in list" :key="item.label" :type="item.type" link disabled>
    {{ item.label }}
  </el-button>

  <h3>尺寸</h3>
  <el-button size="large">
    Large
  </el-button>
  <el-button>
    Default
  </el-button>
  <el-button size="small">
    Small
  </el-button>
</template>
