
const person={
    name: 'ayesha',
    age: 22,
    address: 'Dhaka',
    phone : '01816729732',

}

const {name, age: boyos}= person

// console.log(name, boyos);

const numbers =[45, 46]
const [first, second]=numbers
// console.log(first)


function doubleNumber(a, b){
    return [a*2, b*2]
}
const [x,y] = doubleNumber(10,10);
console.log(x, y)
