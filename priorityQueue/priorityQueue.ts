interface collection {
    [index: number]: [string,number];
}
function PriorityQueue(){
    let collection: collection =[]
    this.print = () => console.log(collection)
    this.enqueue = (element:[string, number]) =>{
        if(this.isEmpty()){
            collection.push(element)
        }
    }
    this.dequeue= ():[] => collection.shift();
    this.front =():number => collection[0]
    this.size =():number => collection.length
    this.isEmpty = ():boolean => collection.length ===0
}

var pq= new PriorityQueue();
pq.enqueue(['dhwani', 2])
pq.enqueue(['Pritish', 3])
pq.enqueue(['sharvil', 1])
pq.print()
