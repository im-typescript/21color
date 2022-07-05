let n: number = 1
let b: boolean = true
let s: string = 'hello'
let o: object = {}

let count = 10, message = 'Your count'
let result = `${message} is ${count}`
console.log(result)
console.clear()

let k : object = { name: 'Jack', age: 32 }
k = { first: '1', second: 2 }
console.log(k)

interface IPerson {
  name: string
  age: number
}

let good: IPerson = {name: 'Jack', age: 32}
// let nice: IPerson = {name: 30 , age: 20} //typeerror

interface IPerson2 {
  name: string
  age: number
  etc?: boolean 
}

let good1: IPerson2 ={name: 'Jack' , age: 32 } //ect 는 선택 속성이기때문에 에러가 나지않음. 만일 선택속성이 아니라면 타입에러 

let good2: IPerson2 = {name: 'Nice', age: 31, etc: true}

// 익명 interface 
let ai: {
  name: string
  age: number
  ect?: boolean
} = {name: 'Hana', age: 30} 

// Destructing ! 
const printMe =(me: {name: string, age: number, etc?: boolean} )=> {
  console.log(
    me.etc ? 
      `${me.name} ${me.age} ${me.etc}` : 
      `${me.name} ${me.age}`
  )
}
printMe(ai)