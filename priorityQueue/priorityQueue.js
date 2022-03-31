function PriorityQueue(){
    let collection =[]
    this.print = () => console.log(collection)
    this.enqueue = (element)=>{
         console.log("elem", element)
        if(this.isEmpty()){
            collection.push(element)
        }else{
            let added=false;
            for(let i=0;i<collection.length;i++){
                if(element[1]< collection[i][1]){
                    collection.splice(i,0,element)
                    console.log("collection", collection)
                    added = true;
                    break;
                }
            }
            if(!added){
                collection.push(element)
            }
        }

    }
    this.dequeue= () => collection.shift();
    this.front =() => collection[0]
    this.size =() => collection.length
    this.isEmpty = () => collection.length ===0
}

var pq= new PriorityQueue();
pq.enqueue(['dhwani', 2])
pq.enqueue(['Pritish', 3])
pq.enqueue(['sharvil', 1])
pq.print()