const sizes = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]];

function solution(sizes) {
  const changeSize = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

  let maxSize = [0, 0];
  changeSize.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  })
  return maxSize[0] * maxSize[1];
}

console.log(solution(sizes));