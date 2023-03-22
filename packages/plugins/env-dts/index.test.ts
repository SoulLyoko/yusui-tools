import { generateTemplate } from ".";

describe("createEnvDts", () => {
  it("should create dts file", () => {
    const env = { DEV: true, VITE_TEST: "test", VITE_API_URL: "http://localhost:3000" };
    const template = generateTemplate(env);
    expect(template).toContain("/** DEV=true */");
    expect(template).toContain("DEV: boolean");
    expect(template).toContain("/** VITE_TEST=test */");
    expect(template).toContain("VITE_TEST: string");
    expect(template).toContain("/** VITE_API_URL=http://localhost:3000 */");
    expect(template).toContain("VITE_API_URL: string");
  });
});
