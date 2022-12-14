import fs from "fs-extra";

import { fixAddRow, fixBtnType, fixFormGroup } from ".";

describe("avuePatch", () => {
  it("should transform code", () => {
    const avue_min_js = fs.readFileSync("node_modules/@smallwei/avue/lib/avue.min.js", "utf-8");
    expect(fixAddRow(avue_min_js)).toMatch(`e.text = e.deepClone(e.text)};`);
    expect(fixBtnType(avue_min_js)).toMatch(
      `type:e.menuText("danger"),text:e.isTextMenu,icon:e.crud.getBtnIcon("delBtn")`
    );
    expect(fixFormGroup(avue_min_js)).toMatch(`n=this.deepClone(this.tableOption.group)`);
  });
});
