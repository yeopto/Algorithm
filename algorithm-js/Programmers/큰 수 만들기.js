function solution(number, k) {
  const stack = [];
  let count = 0;
  
  for (const el of number) {
      while (count < k && stack[stack.length - 1] < el) {
          stack.pop();
          count += 1;
      }
      stack.push(el);
  }
  
  while (count < k) {
      stack.pop();
      count += 1;
  }
  
  return stack.join("");
}