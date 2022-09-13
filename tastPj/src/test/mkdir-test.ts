import { mkdir } from '../fileApi/mkdir';

const makeDateDir =async (dirname:string) => {
  let result = await mkdir(dirname);
  console.log(`'${result} dir created`) 
}

makeDateDir('data/today');