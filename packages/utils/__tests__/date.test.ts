import { dateFormat, durationFormat } from "../src/date";

describe("dateFormat", () => {
  const date = new Date("2022-02-22 22:22:22");
  it("show only date by default", () => {
    expect(dateFormat(date)).toBe("2022-02-22");
  });

  it("show date and time", () => {
    expect(dateFormat(date, { time: true })).toBe("2022-02-22 22:22:22");
  });

  it("show only time", () => {
    expect(dateFormat(date, { date: false, time: true })).toBe("22:22:22");
  });

  it("zh-CN", () => {
    expect(dateFormat(date, { time: true, locale: "zh" })).toBe("2022年2月22日 22时22分22秒");
  });

  it("custom format", () => {
    expect(dateFormat(date, "YYYY/M/D")).toBe("2022/2/22");
  });
});

describe("durationFormat", () => {
  it("< 1000", () => {
    expect(durationFormat(999)).toBe("");
  });

  it("humanize", () => {
    expect(durationFormat(337736260)).toMatchInlineSnapshot('"4 天"');
  });

  it("detail", () => {
    expect(durationFormat(337736260, true)).toMatchInlineSnapshot('"03天21小时48分钟56秒"');
  });
});
