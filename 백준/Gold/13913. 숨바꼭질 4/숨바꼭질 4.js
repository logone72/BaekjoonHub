const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const start = Number(input[0]);
const target = Number(input[1]);

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
      this.store["0"] = value;
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

const path = [];

function BFS() {
  const queue = new Queue();
  const visited = [];

  queue.push(start);
  visited[start] = 0;
  path[start] = start;

  while (true) {
    const f = queue.popleft();
    const depth = visited[f];
    const nextSpots = [f - 1, f + 1, f * 2];

    for (const spot of nextSpots) {
      const isVisited = !!visited[spot];

      if (isVisited || spot === start || spot < 0 || spot > 100000) {
        continue;
      }

      if (target === spot) {
        path[spot] = f;
        return depth + 1;
      }

      if (!isVisited) {
        queue.push(spot);
        path[spot] = f;
        visited[spot] = depth + 1;
      }
    }
  }
}

if (start === target) {
  console.log(0);
  console.log(start);
} else {
  const time = BFS();
  const resultPath = [target];
  let index = target;

  for (let i = 0; i < time; i++) {
    resultPath.push(path[index]);
    index = path[index];
  }

  console.log(time);
  console.log(resultPath.reverse().join(' '));
}
