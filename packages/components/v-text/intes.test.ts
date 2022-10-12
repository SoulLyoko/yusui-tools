import { mount } from "@vue/test-utils";

import VText from "./index.vue";

describe("VText", () => {
  const wrapper = mount(VText);

  it("mount", async () => {
    expect(wrapper.find("span").exists()).toBeTruthy();
  });

  it("reactive modelValue", async () => {
    await wrapper.setProps({ modelValue: "test" });
    expect(wrapper.find("span").html()).toContain("test");
  });
});
