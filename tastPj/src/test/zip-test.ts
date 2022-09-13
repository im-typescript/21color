import { zip } from '../utils';
import { makeFakeData, IFake } from '../fake';
const data = makeFakeData();

const keys = Object.keys(data),value = Object.values(data)

const fake:IFake = zip(keys, value) as IFake; 
console.log(fake);

