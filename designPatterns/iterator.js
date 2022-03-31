class Iterator{
    constructor(elements) {
        this.index =0;
        this.elements= elements;
    }

    next(){
        return this.elements[this.index++]
    }

    hasNext(){
        return this.index <= this.elements.length
    }

    first(){
        this.index=0
        return this.next();
    }

    each(func){
        for(let i = this.first();this.hasNext(); i= this.next()){
            func(i)
        }
    }
}


function iterate(){
    var items = ['Yello', 'Green', 'Blue']
    var iter = new Iterator(items)
    iter.each(i => console.log("item", i))
}
iterate()