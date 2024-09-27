// const numbers = [3, 5, 3, 23, 56, 74];
// numbers.push(56, 76, 23, 21)
// numbers[1]=45;
// console.log(numbers);

// // we can not reassign into the const variable but we can modify

// const student ={
//     name: 'ayesha',
//     age: 22,
// }
// // student={name:'bristi'}
// student.name='bristi';
// console.log(student);

// let sum=0;
// for(let i=0; i<=10; i++){
//     const num=i;
//   sum=sum+num;
// }
// console.log(sum)


function add(num1, num2=0){
    const result = num1+num2;
    return result;
}
console.log(add(5,7));
console.log(add(45));
// .................
const a =10; 
const b=20;
const numbers = [34, 56, 23];
const student={
    name: 'alex',
    age: 35,
    result : 34,
}

const sum = `The sum of ${numbers[0]} and ${student.result} is ${numbers[0]+ student.result}`;

const result = `The sum of ${a} and ${b} is ${a+b}`;
console.log(result);
console.log(sum);
console.log(student);
