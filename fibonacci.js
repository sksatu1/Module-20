// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

/* 3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
..............
nth = (n-1)th + (n-2)th
*/
const fibo = [0, 1];
for (let i = 2; i < 10; i++) {

    // nth = (n-1)th + (n-2)th 
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);