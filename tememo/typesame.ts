const arrayOfNumbers1: number[] = [1, 4, 9, 7, 10, 11];
const arrayOfNumbers2: Array<number> = [1, 4, 5, 3, 1, 20, 7];
const arrayOfString1: string[] = ['a', 'b', 'c'];
const arrayOfString2: Array<string> = ['a', 'b ', 'c'];

// same types! 



// Narrowing
// in keyword로 object narrowing 가능 ! 
// 속성명 in obj data

type Fish = { swim: string };
type Bird = { flex: string };

function myFunc(animal: Fish | Bird) {
  if ('swim' in animal) {
    animal.swim
  }
}

type Car = {
  wheel: '4개',
  color: string
}

type Bike = {
  wheel: '2개',
  color: string
}

function func(x: Car | Bike) {
  if (x.wheel === '4개') {
    for (const i in x) {
      console.log(`${i}는 Car타입니다 .`)
    }
  } else {
    console.log(x);
  }
}

func({ wheel: '4개', color: 'red' });