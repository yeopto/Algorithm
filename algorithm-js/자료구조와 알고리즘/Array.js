const sum = Array
  .from(new Array(5), (_, k) => k + 5)
  .reduce((acc, cur) => acc + cur, 0);

console.log(sum) // 35

const names = ['Kim', 'Lee', 'Park', 'Lee', 'Kim'];
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
const uniqueNamesWithSpread = [...new Set(names)];

console.log(uniqueNamesWithArrayFrom); // [ 'Kim', 'Lee', 'Park' ]
console.log(uniqueNamesWithSpread); // [ 'Kim', 'Lee', 'Park' ]

let arr3 = Array(10).fill(0);
let arr4 = Array.from({ length: 10 }, (_, i) => i);

console.log(arr3); // [0,0,0,0,0,0,0,0,0,0]
console.log(arr4); // [0,1,2,3,4,5,6,7,8,9]