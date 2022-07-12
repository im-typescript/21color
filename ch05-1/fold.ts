export const fold = <T>(array: T[], callback: (result: T, val: T) => T, initValue: T) =>{ 

  let result: T = initValue;
  array.forEach((value) => {
    result = callback(result, value)
  })

  return result 
}