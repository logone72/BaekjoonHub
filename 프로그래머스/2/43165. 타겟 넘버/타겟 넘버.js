class Queue {
  constructor() {
    this.store = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    if (this.store[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }

  push(value) {
    if (this.size() === 0) {
      this.store['0'] = value;
    } else {
      this.rear += 1;
      this.store[this.rear] = value;
    }
  }

  popleft() {
    let temp;
    if (this.front === this.rear) {
      temp = this.store[this.front];
      delete this.store[this.front];
      this.front = 0;
      this.rear = 0;
      return temp;
    } else {
      temp = this.store[this.front];
      delete this.store[this.front];
      this.front += 1;
      return temp;
    }
  }
}

function solution(numbers, target) {
    let answer = 0;
    
    // [현재 값, numbers index][]
    const queue = new Queue();
    queue.push([0,0]);
    const numberLimits = numbers
        .slice(1)
        .map((_, index) => numbers.slice(index + 1).reduce((a, c) => a + c))
    
    while (queue.size()) {
        const [value, depth] = queue.popleft();
        
        if (depth >= numbers.length) {
            if (value === target) {
                answer += 1;
            }
            continue;
        }
        
        const number = numbers[depth];
        
        for (const next of [number, -number]) {
            const sum = value + next;
            
            if (depth >= 1) {
                const limit = numberLimits[depth - 1];
                if (!((sum + limit) >= target && (sum - limit) <= target)) {
                    continue;
                }
            }
            
            queue.push([sum, depth + 1]);
        }
    }
    
    return answer;
}