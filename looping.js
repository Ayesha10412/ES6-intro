
// for in

const animal={
    name: 'cat',
    color: 'black-white',
    food: 'milk',
    legs: '4',

}

for(const key in animal){

    const value = animal[key]
    // console.log(key)
    // console.log(value)

}

// for of

const key= Object.keys(animal);
for(const keys of key){

    const value = animal[keys]
    console.log(value)
}