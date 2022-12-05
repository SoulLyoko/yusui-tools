import fs from "fs-extra";

import { uniCalendarSlot, fixUniDataSelectChange } from ".";

describe("uniUIPatch", () => {
  it("should transform uni-calendar", () => {
    const code = fs.readFileSync("node_modules/@dcloudio/uni-ui/lib/uni-calendar/uni-calendar.vue", "utf-8");
    expect(uniCalendarSlot(code, "uni-calendar")).toContain("</slot>");
  });
  it("should transform code uni-data-select", () => {
    const code = fs.readFileSync("node_modules/@dcloudio/uni-ui/lib/uni-data-select/uni-data-select.vue", "utf-8");
    expect(fixUniDataSelectChange(code, "uni-data-select")).toContain(
      "this.$emit('update:modelValue', val);this.$emit('change', val)"
    );
  });
});
