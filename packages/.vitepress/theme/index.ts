import type { App } from "vue";
import type { Theme } from "vitepress";

import defaultTheme from "vitepress/theme";
import "./index.scss";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import Avue from "@smallwei/avue";
import "@smallwei/avue/lib/index.css";

import components from "../components";
import YSComponents from "../../components/index";
import "../../components/styles/index.scss";

export default {
  ...defaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(components);
    app.use(ElementPlus, { locale: zhCn });
    app.use(Avue, { appendToBody: true });
    app.use(YSComponents);
    // app.mixin({
    // beforeCreate() {
    //   import("@smallwei/avue").then(module => app.use(module.default));
    // }
    // });
  }
} as Theme;
