import type { App } from "vue";

import FormTemplate from "./form-template/index.vue";
import FlowTemplate from "./flow-template/index.vue";
import FlowManage from "./flow-manage/index.vue";
import FlowOps from "./flow-ops/index.vue";
import Workbench from "./workbench/index.vue";

export { FormTemplate, FlowTemplate, FlowManage, FlowOps, Workbench };

export default {
  install(app: App) {
    app.component("FormTemplate", FormTemplate);
    app.component("FlowTemplate", FlowTemplate);
    app.component("FlowManage", FlowManage);
    app.component("FlowOps", FlowOps);
    app.component("Workbench", Workbench);
  }
};
