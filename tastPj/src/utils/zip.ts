export const zip = (keys:string[], value:any[]) => {
  const makeObject = (key:string, value:any) => ({[key]: value})
  const mergeObject = (a:any[]) => a.reduce((sum, val)=> ({
    ...sum, ...val
  }), {})

  let tmp = keys
    .map((key, index)=> [key, value[index]])
    .filter(a => a[0] && a[1])
    .map(a => makeObject(a[0], a[1]))
    return mergeObject(tmp);
}