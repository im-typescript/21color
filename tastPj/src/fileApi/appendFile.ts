import * as fs from 'fs';
import { reject } from 'lodash';
import { resolve } from 'path';

export const appendFile = (filename: string, data: any): Promise<any> => 
  new Promise((resolve, reject) => {
    fs.appendFile(filename, data, 'utf-8', (error) => {
      error ? reject(error) : resolve(data)
    })
  })