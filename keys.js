
// const glass ={
//     name: 'thai',
// color: 'white',
// price: 1200,
// isCleaned: true,
// }
// console.log(glass)

// // keys
// const keys = Object.keys(glass);
// console.log(keys)

// // values
// const values = Object.values(glass);
// console.log(values)

// // pair
// const pair = Object.entries(glass)
// console.log(pair)

// // delete any of property
// delete glass.isCleaned;
// // console.log(glass)

// // another way
// const {isCleaned, ...shortGlass} =glass;
// // console.log(shortGlass)

// // freeze

// // {
// // const Freeze = Object.freeze(glass);
// // console.log(Freeze);
// // glass.source= 'Bangladesh';
// // console.log(glass)
// // }


// // seal
// Object.seal(glass);
// glass.price=1500;
// console.log(glass)

const animal={
    name: 'cat',
    color: 'black-white',
    food: 'milk',
    legs: '4',

}

// keys
const Keys = Object.keys(animal);
const Values = Object.values(animal);
console.log(Keys, Values)

// delete
 delete animal.name;
console.log(animal)

// pair
const pair = Object.entries(animal)
console.log(pair)

// seal
 Object.seal(animal)
animal.color='brown';
console.log(animal)

// freeze
Object.freeze(animal);
animal.food='fish';
console.log(animal)

