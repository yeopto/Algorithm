function solution(s) {
  const answer = s
      .split("")
      .map(el => el.charCodeAt())
      .sort((a, b) => b - a)
  
  return String.fromCharCode(...answer);    
}