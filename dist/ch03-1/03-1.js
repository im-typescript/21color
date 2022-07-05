"use strict";
let n = 1;
let b = true;
let s = 'hello';
let o = {};
let count = 10, message = 'Your count';
let result = `${message} is ${count}`;
console.log(result);
console.clear();
let k = { name: 'Jack', age: 32 };
k = { first: '1', second: 2 };
console.log(k);
let good = { name: 'Jack', age: 32 };
let good1 = { name: 'Jack', age: 32 }; //ect 는 선택 속성이기때문에 에러가 나지않음. 만일 선택속성이 아니라면 타입에러 
let good2 = { name: 'Nice', age: 31, etc: true };
// 익명 interface 
let ai = { name: 'Hana', age: 30 };
// Destructing ! 
const printMe = (me) => {
    console.log(me.etc ?
        `${me.name} ${me.age} ${me.etc}` :
        `${me.name} ${me.age}`);
};
printMe(ai);
//# sourceMappingURL=03-1.js.map