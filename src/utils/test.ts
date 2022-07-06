const makePerson1 = () => {

}

const makePerson2 = (a:string, b: number = 10) : string => a + b

console.log(makePerson2('1', 2));

type Person10 = {a :string , b: number}
const makePerson = (a:string, b: number = 10 ) : Person10 => ( { a,b } )
console.log(makePerson('test',10));