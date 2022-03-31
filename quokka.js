import intersection from "lodash/intersection";

// const nums =[1,2,2]
// for(let n of nums){
//     console.log("n",n)
// }


 function hello(str){
     str.split(',')
     return str
 }

 hello("Hello World")


function closure1(){
    for(var i=0;i<=5;i++) {
        setTimeout(() => {
            console.log(i)
        }, 3000)
        console.log("Javscript");
    }
    console.log("Javscript");
}

// function in the setTimeout takes same reference of i and setTimeout take the  block and put it in the veent table and through event loop
// it goes to call stack again  and execute it
// o/p
// 6
// 6

function closure2(){
  for(let i=0;i<=5;i++) {
      setTimeout(() => {
          console.log(i)
      }, 3000)
  }
    console.log("Javscript");
}
