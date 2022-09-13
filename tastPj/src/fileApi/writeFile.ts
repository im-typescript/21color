import * as fs from 'fs'

export const writeFile = (filename:string, data: any) : Promise<any> => 
  new Promise((resolve, rejects) => {
    fs.writeFile(filename, data, 'utf-8', (error) => { error ? rejects(error) : resolve(data) }
    )
  })