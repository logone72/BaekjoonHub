const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const min = 0;
const max = 100000;

function bfs(start, end) {
  const queue = [];
  const visited = new Array(100001).fill(false);

  visited[start] = true;
  // [위치, 소요시간];
  queue.push([start, 0]);

  while (queue.length > 0) {
    const [location, time] = queue.shift();

    if (location === end) {
      return time;
    }

    for (let next of [location * 2, location - 1, location + 1]) {
      if (next < 0 || next > 100000 || visited[next]) continue;

      if (next === location * 2) {
        queue.unshift([next, time]);
      } else {
        queue.push([next, time + 1]);
      }
      visited[next] = true;
    }
  }
}

console.log(bfs(input[0], input[1]));
