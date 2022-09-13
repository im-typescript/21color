import rimraf from 'rimraf';
import { fileExists } from './fileExists';

export const rmdir = (dirname:string): Promise<string> => 
  new Promise(async (resolve, rejects) => {
    const alreadyExists = await fileExists(dirname)
    !alreadyExists ? resolve(dirname) : rimraf(dirname, error => error ? rejects(error) : resolve(dirname))
  })
