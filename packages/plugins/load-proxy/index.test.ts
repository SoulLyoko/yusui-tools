import { loadProxy } from ".";

describe("loadProxy", () => {
  it("should transform to proxy config", () => {
    const PROXY = `[["/api","https://127.0.0.1:8080",true],["/apis","http://127.0.0.1:8081"]]`;
    expect(loadProxy(PROXY)).toMatchInlineSnapshot(`
      {
        "/api": {
          "changeOrigin": true,
          "rewrite": [Function],
          "secure": true,
          "target": "https://127.0.0.1:8080",
          "ws": true,
        },
        "/apis": {
          "changeOrigin": true,
          "rewrite": [Function],
          "secure": false,
          "target": "http://127.0.0.1:8081",
          "ws": true,
        },
      }
    `);
  });
});
