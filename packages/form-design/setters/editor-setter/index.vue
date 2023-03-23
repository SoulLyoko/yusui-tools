<template>
  <el-tooltip v-if="tooltip" trigger="click" effect="light">
    <el-button>{{ btnText || "编辑代码" }}</el-button>
    <template #content>
      <Editor
        v-model:value="editorValue"
        defaultLanguage="javascript"
        :options="options"
        :width="width || '300px'"
        :height="height || '200px'"
        v-bind="$attrs"
      ></Editor>
    </template>
  </el-tooltip>

  <template v-else-if="dialog">
    <el-button @click="visible = true">{{ btnText || "编辑代码" }}</el-button>
    <el-dialog v-model="visible" :fullscreen="fullscreen" :width="width">
      <Editor
        v-model:value="editorValue"
        defaultLanguage="javascript"
        :options="options"
        :height="height || (fullscreen ? '90vh' : '600px')"
        v-bind="$attrs"
      ></Editor>
    </el-dialog>
  </template>

  <Editor
    v-else
    v-model:value="editorValue"
    defaultLanguage="javascript"
    :options="options"
    :width="width"
    :height="height"
  ></Editor>
</template>

<script setup lang="ts">
import type { EditorProps } from "@guolao/vue-monaco-editor";

import { ref, computed, onUnmounted } from "vue";
import Editor, { useMonaco } from "@guolao/vue-monaco-editor";

import { jsonStringify, jsonParse } from "../../utils";

const props = defineProps<{
  modelValue?: any;
  valueType?: string;
  options?: EditorProps["options"];
  tooltip?: boolean;
  dialog?: boolean;
  fullscreen?: boolean;
  width?: string | number;
  height?: string | number;
  btnText?: string;
}>();
const emit = defineEmits(["update:modelValue"]);

const { monacoRef, unload } = useMonaco();
onUnmounted(() => !monacoRef.value && unload());

const visible = ref(false);

const options = computed(() => {
  return {
    renderValidationDecorations: "off",
    minimap: { enabled: props.dialog || false },
    ...props.options
  };
});

const editorValue = computed({
  get() {
    const value = props.modelValue;
    if (typeof value === "string") {
      return value;
    } else if (props.valueType === "function" && typeof value === "function") {
      return value ? value.toString() : "";
    } else if (["object", "array"].includes(props.valueType!) && typeof value === "object") {
      return value ? jsonStringify(value) : "";
    }
    return String(value ?? "");
  },
  set(val) {
    if (props.valueType === "function") {
      val = eval(`${val}`);
    } else if (["object", "array"].includes(props.valueType!)) {
      val = jsonParse(val);
    }
    emit("update:modelValue", val);
  }
});
</script>