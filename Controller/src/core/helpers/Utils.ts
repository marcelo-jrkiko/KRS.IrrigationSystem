export const formatarData = (data: any) => {
  const date: any = new Date(Date.parse(data));
  if (isNaN(date)) {
    return " ";
  }

  return `${date.toLocaleDateString("pt-BR")} ${date.toLocaleTimeString("pt-BR")}`;
}

export function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function dig(obj: any, target: string) {
  if (obj == undefined) {
    return undefined;
  }

  if (
    typeof obj === 'object' &&
    obj !== null
  ) {
    const keys = Reflect.ownKeys(obj);
    let found: any = undefined;

    for (var k of keys) {
      if (k == target) {
        found = obj[k];
        break;
      }
      else {
        found = dig(obj[k], target);
        if (found != undefined) {
          break;
        }
      }
    }

    return found;
  }

  return undefined;
}