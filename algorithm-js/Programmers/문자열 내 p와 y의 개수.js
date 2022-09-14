function solution(s){
  let pCount = 0;
  let yCount = 0;
  
  for (const c of s) {
    if (c === "p" || c === "P") {
      pCount++;
    } else if (c === "y" || c === "Y") {
      yCount++;
    }
  }
  
  if ((pCount === 0 && yCount === 0) || 
    (pCount === yCount)) return true;
  else return false;
}