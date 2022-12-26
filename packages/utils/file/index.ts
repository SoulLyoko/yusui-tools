import fileSaver from "file-saver";

/**
 * 从url中获取文件名
 * @param {String} fileUrl 文件地址
 * @param {Boolean} ext 是否返回文件扩展名，默认true
 */
export function getFileName(fileUrl: string, ext = true) {
  let fileName = fileUrl.substring(fileUrl.lastIndexOf("/") + 1);
  if (!ext) {
    fileName = fileName.substring(0, fileName.lastIndexOf("."));
  }
  return fileName;
}

/**
 * 下载文件，使用file-saver的实现，针对pdf做处理
 * @param {String|Blob} data 可以是下载地址或blob文件
 * @param {String} filename 文件名
 */
export function downloadFile(data: string | Blob, filename?: string) {
  const { saveAs } = fileSaver;
  if (typeof data === "string" && data.endsWith(".pdf")) {
    fetch(data)
      .then(res => res.blob())
      .then(blob => {
        const newBlob = new Blob([blob], { type: "application/octet-stream" });
        saveAs(newBlob, filename || getFileName(data));
      });
  } else if (data instanceof Blob && data.type.includes("pdf")) {
    const newBlob = new Blob([data], { type: "application/octet-stream" });
    saveAs(newBlob, filename);
  } else {
    saveAs(data, filename);
  }
}
