import type { App } from "vue";
import type { Theme } from "vitepress";

import defaultTheme from "vitepress/theme";
import "./index.scss";
import components from "../components";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import YSComponents from "../../components/index";
import "../../components/styles/index.scss";
import "@smallwei/avue/lib/index.css";
// @ts-ignore
import AvueFormDesign from "@sscfaith/avue-form-design";

export default {
  ...defaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(components);
    app.use(ElementPlus);
    app.use(YSComponents);
    app.use(AvueFormDesign);
    app.mixin({
      mounted() {
        import("@smallwei/avue").then(module => app.use(module.default));
      }
    });
  }
} as Theme;
