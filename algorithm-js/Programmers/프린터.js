class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enque(value) {
    this.queue[this.rear++] = value;
  }

  deque() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

const priorities = [2, 1, 3, 2];
const location = 2;

function solution(priorities, location) {
  const q = new Queue();
  
  for (let i = 0; i < priorities.length; i++) {
    q.enque([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);

  let count = 0;
  while (true) {
    const currentValue = q.peek();
    if (currentValue[0] < priorities[count]) {
      q.enque(q.deque());
    } else {
      const value = q.deque();
      count++;
      if (location === value[1]) {
        return count;
      }
    }
  }
}

console.log(solution(priorities, location));