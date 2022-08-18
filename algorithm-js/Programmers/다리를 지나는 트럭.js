class Queue {
  constructor() {
    this.q = [];
    this.front = 0;
    this.rear = 0;
  }
  enque(value) {
    this.q[this.rear++] = value;
  }
  deque() {
    const value = this.q[this.front];
    delete this.q[this.front];
    this.front += 1;
    return value;
  }
  peek() {
    return this.q[this.front];
  }
  size() {
    return this.rear - this.front;
  }
}

const bridge_length = 2;
const weight = 10;
const truck_weights = [7,4,6,8];

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  const bridge = new Queue();
  let bridge_weight = 0;
  while (truck_weights.length > 0) {
    answer++;
    if (bridge.size() === bridge_length) {
      bridge_weight -= bridge.deque();
    }
    if (bridge_weight + truck_weights[0] > weight) {
      bridge.enque(0);
      continue;
    }
    let truck_weight = truck_weights.shift();
    bridge.enque(truck_weight);
    bridge_weight += truck_weight;
  }

  answer += bridge_length;

  return answer;
}

console.log(solution(bridge_length, weight, truck_weights));