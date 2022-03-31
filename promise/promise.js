const fetch = function(url){
    return new Promise((resolve,reject) => {
         request((error, response) => {
             if(error){
                 reject(error)
             }
             resolve(response)
         })
    })
}

class Promise {
    constructor(executionFn){
        this.promiseChain = [];
        this.onResolve = this.onResolve.bind(this);
        this.onReject = this.onReject.bind(this);
        this.handleError = () =>{}
        executionFn(this.onResolve,this.onReject)
    }

    onResolve(value){

        try{
            let storedVal= value
            this.promiseChain.forEach(nextFn=> {
               storedVal=  nextFn(storedVal)
            })

        }catch(error){
            this.promiseChain =[]
            this.onReject(error)
        }

    }
     onReject(error){
        this.handleError(error)

    }

    then(handleSuccess){
        this.promiseChain.push(handleSuccess)
        return this

    }
     catch(handleError){
         this.handleError = handleError;
         return this;
     }
}