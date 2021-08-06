const business = 850;
const minister = 590;
const army = 970;
/* if (business > minister && business > army) {
    console.log('Business is larger');
}
else if (minister > business && minister > army) {
    console.log('minister is larger');
}
else {
    console.log('army is larger');
} */



// using function 
function largeValue(A, B) {
    if (A > B) {
        console.log('A is bigger');
    }
    else {
        console.log("B is bigger");
    }
}
var finallResult = largeValue(233, 678);



// write a function to find the largest parameter
var bigValue = Math.max(business, minister, army);
console.log('the big value is =', bigValue);

// write a function to find the smallest parameter 
var smallValue = Math.min(business, minister, army)
console.log('the small value =', smallValue);