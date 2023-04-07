import path from "path";

import fs from "fs-extra";

import { generatePages, injectPageStyle } from ".";

describe("uniPages", () => {
  it("generatePages", () => {
    const pagesJsonPath = path.resolve(__dirname, "src/pages.json");
    fs.removeSync(pagesJsonPath);
    expect(fs.existsSync(pagesJsonPath)).toBeFalsy();
    generatePages({
      pagesDir: path.resolve(__dirname, "src/pages"),
      pagesJsonPath: path.resolve(__dirname, "src/pages.json"),
      defaultConfigPath: path.resolve(__dirname, "src/pages.default.json")
    });
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
            \\"path\\": \\"pages/world/world\\",
            \\"style\\": {
              \\"navigationBarBackgroundColor\\": \\"#eee\\",
              \\"navigationBarTitleText\\": \\"world\\"
            }
          },
          {
            \\"path\\": \\"pages/hello/hello\\",
            \\"style\\": {
              \\"navigationBarTitleText\\": \\"hello\\",
              \\"enablePullDownRefresh\\": true,
              \\"onReachBottomDistance\\": 100
            }
          }
        ]
      }"
    `);
  });

  it("injectPageStyle static", () => {
    const code = `<page-meta navigationBarTitleText="hello"></page-meta>`;
    const result = injectPageStyle(code, { isStatic: true, value: "color: #333" });
    expect(result).toMatchInlineSnapshot(
      '"<page-meta page-style=\\"color: #333\\" navigationBarTitleText=\\"hello\\"></page-meta>"'
    );
  });

  it("injectPageStyle not static", () => {
    const code = `<page-meta navigationBarTitleText="hello"></page-meta>`;
    const result = injectPageStyle(code, { isStatic: false, value: "$root.textColor" });
    expect(result).toMatchInlineSnapshot(
      '"<page-meta :page-style=\\"$root.textColor\\" navigationBarTitleText=\\"hello\\"></page-meta>"'
    );
  });
});
