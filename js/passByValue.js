//Passing a primitive variable as a function parameter means that we make a new local instance of the variable and copy the value. Any changes made to the parameter, leave the original variable unaffected

// refrence: https://dev.to/ale3oula/pass-by-value-in-javascript-5gch
//javascripttutorial.net/javascript-pass-by-value/

function square(x) {
    x = x * x;
    return x;
}
var y = 10;
var result = square(y);
console.log(y); // 10 -- no change
console.log(result); // 100


let originalValue = 1
 function updatePassByValue(originalVal){
    originalVal = originalVal + 5;
    window.console.log(originalVal) //6
 }

 updatePassByValue(originalValue)
window.console.log(originalValue) //1


// how It works- https://www.javascripttutorial.net/javascript-pass-by-value/


// Passing by value of references

//There are also complex types as objects, arrays and functions.
// When you manipulate a complex type you work on a reference (memory address) to its value.
// In JS everything is passed by value, and here this argument stands.
// The memory address of the parameter at the time of the function call is passed to the function as the value to be associated with the corresponding copied parameter.

let box ={
    dessert: "donut"
}

let copiedBox = box;
 console.log([box.dessert, copiedBox.dessert]) //  ["donut", "donut"]
copiedBox.dessert = "apple";
console.log([box.dessert, copiedBox.dessert]) //  ["apple", "apple"]


//We will use the same example here, with the only difference of using a complex variable: an object!

let box1 ={
    dessert: "donut"
}

let copiedBox1 = {...box};
console.log([box1.dessert, copiedBox1.dessert]) //  ["donut", "donut"]
copiedBox1.dessert = "apple";
console.log([box1.dessert, copiedBox1.dessert]) //  ["donut", "apple"]


let box2 ={
    dessert: "donut"
}

let copiedBox2 = Object.assign({}, box2);
console.log([box2.dessert, copiedBox2.dessert]) //  ["donut", "donut"]
copiedBox2.dessert = "apple";
console.log([box2.dessert, copiedBox2.dessert]) //  ["donut", "apple"]