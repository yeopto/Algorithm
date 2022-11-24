function solution(ingredient) {
  const stack = [];
  let cnt = 0;

  ingredient.forEach((el) => {
    stack.push(el);
    if (stack.length >= 4) {
      const find = stack.slice(-4).join("");
      if (find === "1231") {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        cnt += 1;
      }
    }
  });

  return cnt;
}
