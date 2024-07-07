export const isString = (value: any) => {
  return typeof value === 'string'
}

export const isBoolean = (value: any) => {
  return typeof value === 'boolean'
}

export const isObject = (value: any) => {
  return typeof value === 'object'
}

export const has = (object: any, key: any) => {
  // eslint-disable-next-line no-prototype-builtins
  return isObject(object) && object.prototype.hasOwnProperty(key)
}

export const get = (object: any, key: any, defaultValue: any) => {
  return has(object, key) ? object[key] : defaultValue
}

export const px = (value: any) => {
  return `${value}px`
}

export const translate = (x: any, y: any) => {
  return `translate(${x}, ${y})`
}

export const stripTags = (html: string) => {
  return html.replace(/(<([^>]+)>)/gi, "").trim();
}

export const isNullOrEmpty = (text: any | undefined | null) => {
  if(text == undefined || text == null) return true;
  if(text.length <= 0) return true;
  return false;
}

export const formatarData = (data: any) => {
  const date : any = new Date(Date.parse(data));
  if(isNaN(date)) {
    return " ";
  }
  
  return `${date.toLocaleDateString("pt-BR")} ${date.toLocaleTimeString("pt-BR")}` ;
}

export function pageToOffset(page: number, pageSize: number) {
  return (page - 1) * pageSize;
}