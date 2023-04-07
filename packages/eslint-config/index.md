# eslint-config & prettier-config

## Install

```bash
npm i -D eslint prettier @yusui/eslint-config @yusui/prettier-config
```

## Usage

:::code-group

```js [.eslintrc.js]
module.exports = {
  extends: "@yusui/eslint-config"
};
```

```js [.prettierrc.js]
module.exports = {
  ...require("@yusui/prettier-config")
};
```

:::

## Preview

:::code-group

<<< @/eslint-config/index.js[eslint-config]

<<< @/prettier-config/index.js[prettier-config]

:::
