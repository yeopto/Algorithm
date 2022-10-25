var romanToInt = function(s) {
  const symbol = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
  };
  let total = 0
  
  for (let i = 0; i < s.length; i++) {
      if (symbol[s[i]] < symbol[s[i + 1]]) {
          total += symbol[s[i + 1]] - symbol[s[i]]
          i++;
      } else {
          total += symbol[s[i]];
      }
  }
  
  return total;
};