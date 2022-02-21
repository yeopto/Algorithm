const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution();

function solution() {
    const T = Number(input.shift());
    
    for (let i = 0; i < T; i++) {
        const HWM = input[i].split(' ');
        let H = Number(HWM[0]);
        let N = Number(HWM[2]);
        let cntRoom = 1;

        while (N > H) {
            cntRoom++;
            N = N - H;
        }

        if (cntRoom < 10) {
            console.log(`${N}0${cntRoom}`);
        } else {
            console.log(`${N}${cntRoom}`);
        }
    }
}