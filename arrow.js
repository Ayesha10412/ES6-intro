// function expression

const add = function(a, b){
    return a+b;
}
console.log(add(4,5))

// arrow function

const add1 = (a, b) => a + b;
// const sum = add1(5, 10);
// console.log(sum);
console.log(add1(4, 2))

const myName = () => console.log('Alex');
console.log(myName ());
const value = a => a*a;
console.log(value(3))


const getAge = (person) => person.age;
 
const student ={name: 'alex', age: 35};
// const result= getAge(student)
// console.log(result)
console.log(getAge(student))

const getNumber = numbers => numbers[1]
console.log(getNumber([12, 13, 14]))