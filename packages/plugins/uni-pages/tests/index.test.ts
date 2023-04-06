import path from "path";

import fs from "fs-extra";

import { generatePages } from "../";

describe("uniUIPatch", () => {
  it("generatePages", () => {
    const pagesJsonPath = path.resolve(__dirname, "./src/pages.json");
    fs.removeSync(pagesJsonPath);
    expect(fs.existsSync(pagesJsonPath)).toBeFalsy();
    generatePages(path.resolve(__dirname, "./src"));
    expect(fs.existsSync(pagesJsonPath)).toBeTruthy();
    const pagesJson = fs.readFileSync(pagesJsonPath, "utf-8");
    expect(pagesJson).toMatchInlineSnapshot(`
      "{
        \\"easycom\\": {
          \\"autoscan\\": true,
          \\"custom\\": {
            \\"^uni-(.*)\\": \\"@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue\\",
            \\"^u-(.*)\\": \\"uview-plus/components/u-$1/u-$1.vue\\"
          }
        },
        \\"globalStyle\\": {
          \\"navigationBarTextStyle\\": \\"black\\",
          \\"navigationBarBackgroundColor\\": \\"#fff\\"
        },
        \\"pages\\": [
          {
            \\"path\\": \\"pages/hello/index\\",
            \\"style\\": {
              \\"navigationBarTextStyle\\": \\"black\\",
              \\"navigationBarTitleText\\": \\"hello\\"
            }
          },
          {
            \\"path\\": \\"pages/world/index\\",
            \\"style\\": {
              \\"navigationBarTitleText\\": \\"world\\"
            }
          }
        ]
      }"
    `);
  });
});
