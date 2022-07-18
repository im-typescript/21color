import { StringIterable } from './StringIterable';
for(let value of new StringIterable(['hello', 'World', '!'], 1)) {
  console.log(value)
} 