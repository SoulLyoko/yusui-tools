import { mount } from "@vue/test-utils";

import BasicContainer from "../src/basic-container/index.vue";

describe("BasicContainer", () => {
  const wrapper = mount(BasicContainer);

  it("mount", async () => {
    expect(wrapper.find(".basic-container").exists()).toBeTruthy();
  });

  it("default type full", async () => {
    expect(wrapper.classes()).toContain("full");
  });

  it("type card", async () => {
    await wrapper.setProps({ type: "card" });
    expect(wrapper.classes()).toContain("card");
  });

  it("type ghost", async () => {
    await wrapper.setProps({ type: "ghost" });
    expect(wrapper.classes()).toContain("ghost");
  });
});
