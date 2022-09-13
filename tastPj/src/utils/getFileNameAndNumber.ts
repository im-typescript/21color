export type FileNameAndNumber = [string, number]

export const getFileNameAndNumber = (defaultFilename: string, defaultNumberOfFakeDate: number): FileNameAndNumber => {
  const [bin, node, filename, numberOfFakeData] = process.argv;
  return [filename || defaultFilename, numberOfFakeData ? parseInt(numberOfFakeData,10): defaultNumberOfFakeDate];
}