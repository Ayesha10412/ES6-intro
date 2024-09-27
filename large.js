// no parameters

const math = () => Math.PI;
console.log(math())

// large arrow function

const large = (x, y, z)=> {
   const sum= x+y+z ;
  const  mul = x*y*z ;
    return sum + mul ;
}
console.log(large(2, 3, 4))