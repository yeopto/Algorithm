const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString()

const n = +input;
const visited = new Array(n + 1).fill(false);
const result = [];
const arr = [];

function dfs(count) {
    if (count === n) {
        result.push(arr.join(' '));
        return;
    }

    for (let i = 1; i < n + 1; i++) {
        if (!visited[i]) {
            visited[i] = true;
            arr.push(i);
            dfs(count + 1);
            arr.pop();
            visited[i] = false;
        }
    }
}

dfs(0);
console.log(result.join('\n'));