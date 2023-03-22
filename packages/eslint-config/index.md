# eslint-config & prettier-config

## Install

```bash
npm i -D eslint prettier @yusui/eslint-config @yusui/prettier-config
```

## Usage

```js
// .eslintrc.js
module.exports = {
  extends: "@yusui/eslint-config"
};

// .prettierrc.js
module.exports = {
  ...require("@yusui/prettier-config")
};
```

## Preview

### eslint-config

<<< @/eslint-config/index.js

### prettier-config

<<< @/prettier-config/index.js
