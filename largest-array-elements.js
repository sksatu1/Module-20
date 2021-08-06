function largestElement(numbers) {
    let largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [34, 44, 5, 66, 78, 32];
const oldest = largestElement(ages);
console.log('large value is = ', oldest);