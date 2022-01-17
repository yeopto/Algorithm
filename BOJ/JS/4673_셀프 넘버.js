function d(n) {
    let num = n;
    let result = 0;

    for (let i = 0; i < String(n).length; i++) {
        result += num % 10;
        num = Math.floor(num / 10);
    }

    return n + result;
}

let selfNumbers = Array(10000 + 1).fill(true);

for (let i = 0; i <= 10000; i++) {
    selfNumbers[d(i)] = false;
}

for (let i = 0; i <= 10000; i++) {
    if (selfNumbers[i]) {
        console.log(i);
    }
}