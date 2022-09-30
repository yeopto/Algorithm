function solution(n, lost, reserve) {
  let hasUniform = new Array(n).fill(1);

  for (let i = 0; i < lost.length; i++) {
    hasUniform[lost[i] - 1]--;
  }

  for (let i = 0; i < reserve.length; i++) {
    hasUniform[reserve[i] - 1]++;
  }

  for (let i = 0; i < hasUniform.length; i++) {
    if (hasUniform[i] === 0) {
      if (hasUniform[i - 1] === 2) {
        hasUniform[i]++;
        hasUniform[i - 1]--;
      } else if (hasUniform[i + 1] === 2) {
        hasUniform[i]++;
        hasUniform[i + 1]--;
      }
    }
  }
  return hasUniform.filter((el) => el).length;
}
