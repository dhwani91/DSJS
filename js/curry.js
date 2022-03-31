/// sum(1)(2)(3)(4)..(n)() | Amazon UI/Frontend Javascript Interview Question
const sum = a => {
    return b => {
        if (b) {
            return sum(a + b);
        } else {
            return a;
        }
    }
}
sum(1)(2)(3)(4)

// advanced currying

const curry =(fn) =>{
    return curried = (...args) => {
        console.log("##args", args)
        console.log("##curried", curried)
        if (fn.length !== args.length){
            return curried.bind(null, ...args)
        }
        return fn(...args);
    };
}

const totalNum=(x,y,z) => {
    return x+y+z
}
const curriedTotal = curry(totalNum);
console.log(curriedTotal(10) (20) (30));
