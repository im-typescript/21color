import { rejects } from 'assert'
import * as fs from 'fs'
import { resolve } from 'path'

export const readFile = (filename: string) : Promise<any> => 
  new Promise<any>((resolve, rejects) => {
    fs.readFile(filename, 'utf-8', (error, data:any) => {
      error ? rejects(error) : resolve(data)
    })
  })