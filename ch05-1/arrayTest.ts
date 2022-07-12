type MylunchMenu = {menu :string, price: number}

let lunch: MylunchMenu[] = [{menu: 'pasta', price: 19000}, {menu: 'kimbab', price: 5000}]

console.log(lunch)

const arrayLength = <T>(array: T[]): number => array.length
