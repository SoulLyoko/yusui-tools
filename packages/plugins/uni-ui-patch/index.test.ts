import fs from "fs-extra";

import { uniCalendarSlot } from ".";

describe("uniUIPatch", () => {
  it("should transform code", () => {
    const code = fs.readFileSync("node_modules/@dcloudio/uni-ui/lib/uni-calendar/uni-calendar.vue", "utf-8");
    expect(uniCalendarSlot(code)).toMatch(`</slot>`);
  });
});
