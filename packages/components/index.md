# Components

## Install

```bash
npm i @yusui/components
```

## Usage

```vue
<template>
  <BasicContainer></BasicContainer>
</template>

<script setup>
import { BasicContainer } from "@yusui/components";
</script>
```

or

```js
// main.js
import { createApp } from "vue";
import App from "./App.vue";
import YSComponents from "@yusui/components";

const app = createApp(App);
app.use(YSComponents);
```

```vue
<template>
  <BasicContainer></BasicContainer>
</template>
```
