import * as _ from 'lodash'

class Startup {

  public static main(): number {
   const group = _.groupBy(['one', 'two', 'three'], 'length');
   console.log(group); 

  return 0;
  }
}

Startup.main()

// 추상 클래스

abstract class Myclass {
  abstract habit: string 
  constructor(public age?:number) {

  }
}

class ThereeClass extends Myclass {
  constructor(public habit: string, age?: number) {
    super(age);
  }
}

const hana = new ThereeClass('hana', 30); 
console.log(hana)