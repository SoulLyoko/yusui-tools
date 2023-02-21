import type { ConfigType } from "dayjs";

import dayjs from "dayjs";
import "dayjs/locale/zh-cn.js";
import durationPlugin from "dayjs/plugin/duration.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
dayjs.extend(relativeTime);
dayjs.extend(durationPlugin);

export interface DateFormatOptions {
  /**
   * 是否显示日期
   * @default true
   */
  date?: boolean;
  /**
   * 是否显示时间
   * @default false
   */
  time?: boolean;
  /**
   * 语言en|zh,
   * @default en
   */
  locale?: "en" | "zh";
}

/**
 * 日期时间格式化
 * @param {String|Number|Date|dayjs.Dayjs} date 需要格式化的日期时间
 * @param {DateFormatOptions|String} options 传入格式化参数或格式化字符串
 * @returns 格式化后的日期时间
 */
export function dateFormat(date: ConfigType, optionsOrFormat: DateFormatOptions | string = {}) {
  if (typeof optionsOrFormat === "string") {
    return dayjs(date).format(optionsOrFormat);
  }
  const { date: showDate = true, time: showTime = false, locale = "en" } = optionsOrFormat;
  const formatMap = {
    en: { date: "YYYY-MM-DD", time: "HH:mm:ss" },
    zh: { date: "YYYY年M月D日", time: "HH时mm分ss秒" }
  };
  const { date: dateStr, time: timeStr } = formatMap[locale];
  if (showDate && !showTime) {
    return dayjs(date).format(dateStr);
  } else if (!showDate && showTime) {
    return dayjs(date).format(timeStr);
  } else if (showDate && showTime) {
    return dayjs(date).format(`${dateStr} ${timeStr}`);
  } else {
    return dayjs(date).format(dateStr);
  }
}

/**
 * 时长格式化
 * @param {Number|String} duration 时长ms
 * @param {Boolean} detail 是否显示精确的时长
 * @returns 格式化后的时长
 */
export function durationFormat(duration: number | string, detail?: boolean) {
  const d = dayjs.duration(Number(duration));
  if (detail) {
    let format = "";
    d.days() && (format += "DD天");
    d.hours() && (format += "HH小时");
    d.minutes() && (format += "mm分钟");
    d.seconds() && (format += "ss秒");
    return d.format(format);
  } else {
    return d.locale("zh-cn").humanize();
  }
}
