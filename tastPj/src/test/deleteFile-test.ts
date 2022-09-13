import { deleteFile } from '../fileApi/deleteFile';
import { rmdir } from '../fileApi/rmdir';
import { dirname } from 'path';

const deletTest =async (filename:string) => {
  const result = await deleteFile(filename);
  console.log(`delete ${result} file!`);
}

Promise.all([deletTest('./data/hello.txt'), deletTest('./data/test.json')])
  .then(s => rmdir('./data'))
  .then(dirname => console.log(`delete ${dirname} dir`))
  .catch((e:Error) => console.log(e.message))
