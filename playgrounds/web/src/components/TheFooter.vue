<template>
  <nav class="[&_.el-button]:ml-0" mt-6 inline-flex gap-2 text-xl>
    <el-button link ml-0-i @click="$router.push('/')">
      <Icon icon="line-md:home-simple" width="20" />
    </el-button>
    <el-button link @click="toggleDark()">
      <Icon icon="line-md:light-dark" width="20" />
    </el-button>
    <el-link :underline="false" href="https://github.com/SoulLyoko/yusui-tools" target="_blank">
      <Icon icon="line-md:github" width="20" />
    </el-link>
  </nav>
</template>
