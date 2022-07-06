const arr = [1, 2, 3];

const getPermutations = function(arr, selectNumber) {
    const result = [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutations(rest, selectNumber - 1);
        const attatched = permutations.map((permutation) => [fixed, ...permutation]);
        result.push(...attatched)
    });

    return result;
};

console.log(getPermutations(arr, 2));