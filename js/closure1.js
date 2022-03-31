
function closure1(){
    var i=1;
    setTimeout( () => {
        console.log(i)
    }, 3000)
}
closure1()
