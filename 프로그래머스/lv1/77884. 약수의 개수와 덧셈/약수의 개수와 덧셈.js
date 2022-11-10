function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    const number = i;

    if (Math.sqrt(number) % 1 === 0) {
      answer -= number;
    } else {
      answer += number;
    }
  }

  return answer;
}
