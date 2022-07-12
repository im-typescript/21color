class Queue {
  protected data: any[] = [];

  push(item: any) {
    this.data.push(item);
  }

  pop() {
    return this.data.shift();
  }
}

// Queue 클래스를 상속하여 number 타입 전용 NumberQueue 클래스 정의

class NumberQueue extends Queue {
  push(item: number) {
    super.push(item);
  }

  pop(): number {
    return super.pop();
  }
}

const queue = new NumberQueue();

queue.push(0); 

queue.push(+'1');

console.log(queue.pop().toFixed())
console.log(queue.pop().toFixed())
