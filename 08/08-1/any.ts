
// supertype 과 subtype? 
// 다른 한 타입을 포함하는 타입 -> supertype 
// 슈퍼타입에  포함되는 타입 -> subtype

// 기준은 모두 다르지만....타입스크립트의 경우 한 타입이 다른 타입의 값을 모두 포함하고 있으면 그 타입을 포함한다 한다. . 

type Supertype = {x: boolean} 
type Subtype = {x: boolean, y: number} 

// 안전한 any ... 는 곧 제네릭이다.  . . . 

