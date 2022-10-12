import { getFileName } from ".";

describe("file utils", () => {
  it("getFileName", () => {
    expect(getFileName("http://1.1.1.1/file/content.docx")).toBe("content.docx");
    expect(getFileName("http://1.1.1.1/file/content.docx", false)).toBe("content");
    expect(getFileName("http://1.1.1.1/file/content.test.docx", false)).toBe("content.test");
  });
});
