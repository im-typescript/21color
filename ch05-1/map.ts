export const map = <T, Q>(array: T[], callback: (value: T, index?: number) => Q): Q[] => {
  let result: Q[] = []
  array.forEach((value, index) => {
    result = [...result, callback(value, index)]
  })
  return result
}

