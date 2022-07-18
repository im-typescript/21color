import { range } from '../ch05-1/range';

// map numtype
let squres: number[] = range(1, 5 + 1).map((val: number) => val * val);
console.log(squres);

//[ 1, 4, 9, 16, 25 ]

// map str , num
let names: string[] = range(1, 5 + 1).map((val, index) => `[${index}]: ${val}`);
console.log(names);

//[ '[0]: 1', '[1]: 2', '[2]: 3', '[3]: 4', '[4]: 5' ]

//reduce

let reduceSum: number = range(1, 100 + 1).reduce((result: number, value: number) => result + value, 0);
console.log(reduceSum);

// 5050

//만일 배열의 각 아이템 모두를 곱하고싶으면 이렇게...! 주의점은 어떤수에 0을 곱하면 결과는 0이기에 1을 initvalue로 넣준다.

let reduceSum2: number = range(1, 10 + 1).reduce((result: number, value: number) => result * value, 1);
console.log(reduceSum2);
