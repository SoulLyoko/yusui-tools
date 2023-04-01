<template>
  <FormDesign v-model="option"></FormDesign>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

import { FormDesign, jsonParse, jsonStringify } from "../packages/form-design/index";
import "../packages/form-design/styles/index.scss";

const option = ref(jsonParse(localStorage.getItem("formDesignOption") || "{}"));
watchEffect(() => {
  localStorage.setItem("formDesignOption", jsonStringify(option.value));
});
</script>
