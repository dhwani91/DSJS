class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next= next;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null
        this.size = 0
    }

    enqueue(val){
        if(!this.first) {
            this.first = new Node(val)
        }
        while(this.first)

    }

    dequeue(val){
        if(!this.first) return null
        let temp = this.first
        if(this.first === this.last){
            this.last= null
        }
        this.first = this.first.next;
        this.size--;
        return temp
    }

}