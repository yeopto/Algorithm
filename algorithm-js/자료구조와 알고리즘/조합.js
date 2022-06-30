const arr = [1, 2, 3];

const getCombinations = function(arr, selectNumber) {
    const result = [];
    if (selectNumber === 1) return arr.map((el) => [el]);
    
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attatched = combinations.map((combinations) => [fixed, ...combinations]);
        result.push(...attatched);
        
    });
    return result;
}

console.log(getCombinations(arr, 2));