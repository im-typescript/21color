import { range } from './range';
import { fold } from './fold';
import { map } from './map';
import { filter } from 'lodash';


// let numbers: number[] = range(1, 100+ 1)
// let result = fold(
//   map(numbers, value =>
//     value * value ), (result, value)=> result + value, 0
//   ) 

//   console.log(result)

let numbes :number[] = range(1, 100 + 1) 
const isOdd = (n: number):boolean => n % 2 != 0
let result = fold(
  filter(numbes, isOdd),
  (result, value)=> result + value, 0);

  console.log(result)