function gcd(n, m) {
  return m ? gcd(m, n % m) : n;
}

function solution(n, m) {
  var answer = [];
  answer.push(gcd(n, m));
  answer.push(n * m / gcd(n, m));
  return answer;
}