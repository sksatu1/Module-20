// using array 

/* const number = [21, 22, 34, 56, 76, 77];
var sum = 0;

for (var i = 0; i < number.length; i++) {
    sum = sum + number[i]
}
console.log('SUM = ', sum); */


// USING Function 
function arrayTotal(number) {
    let sum = 0;
    for (var i = 0; i < number.length; i++) {
        sum = sum + number[i];
    }
    return sum;
}
console.log('total value is =', arrayTotal([21, 22, 34, 56, 76, 77]));