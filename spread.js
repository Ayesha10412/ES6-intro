
const numbers =[3, 5, 1, 5, 2, 8,10]

const maximumValue = Math.max(...numbers)

console.log(maximumValue)

const num=[4, 6,2, 4, 5];
const  value = num;
const values=[...num, 200];
value.push(20);
console.log(value, num);

console.log(values)

console.log([1,2,3, ...numbers, 50, 60])