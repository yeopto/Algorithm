function solution(s, n) {
  return s
    .split("")
    .map((el) => {
      if (el === " ") return " ";
      const code = el.charCodeAt(0);
      if ((code + n > 90 && code <= 90) || code + n > 122) {
        return String.fromCharCode(code + n - 26);
      } else {
        return String.fromCharCode(code + n);
      }
    })
    .join("");
}