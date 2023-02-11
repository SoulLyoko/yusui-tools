export function formJsonToOption(json: string) {
  const option = JSON.parse(json, (key, value) => {
    return /=>/.test(String(value)) ? eval(value) : value;
  });
  return option;
}

export function formOptionToJson(option: Object) {
  const json = JSON.stringify(option, (key, value) => {
    return typeof value === "function" ? String(value) : value;
  });
  return json;
}
