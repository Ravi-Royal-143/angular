export function arrayToObj<T>(datas: Array<T>, keyProp: string): { [key: string]: T} {
    let convertedObj = {};
    datas.forEach(data => convertedObj[data[keyProp]] = data);
    return convertedObj;
  }