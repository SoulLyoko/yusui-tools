<script setup lang="ts">
const params = useRoute('/hi/[name]').params
const router = useRouter()
</script>

<template>
  <div>
    <Icon icon="line-md:emoji-smile-wink" width="40" />
    <p>
      Hi, {{ params.name }}
    </p>
    <p text-sm op50>
      <em>Dynamic route!</em>
    </p>
    <el-button type="info" @click="router.back()">
      Back
    </el-button>
  </div>
</template>
