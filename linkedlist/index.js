class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next= next;
    }
}
 class LinkedList {
    constructor() {
        this.head =null;
        this.size = 0
    }

    // Insert at first
    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++
    }


    // Insert at last
    insertLast(data){
    const node = new Node(data);
    let current;

    //if empty
        if(!this.head){
            this.head = node
        } else{
            current= this.head;
            while(current.next){
                current= current.next
            }
             current.next = node
        }
        this.size++

    }

    // Insert at index
    insertAt(data, index){
        // if Index is out of range
        if(index > 0 && index > this.size){
            return;
        }
        // if first index
        if(index === 0){
            this.insertFirst(data);
            return;
        }

        const node = new Node(data)
        let current, previous;
        current = this.head;
        let count =0;
        while(count<index){
            previous = current // node before index
            count++
            current= current.next //node after the index
        }
        node.next =  current;
        previous.next = node;
        this.size++
    }

    // get at index
    getAt(index){
        let current = this.head;
        let count = 0;
         while(count != index){
             console.log("count", count);
             console.log("index", index);
             current = current.next;
             count++
         }
          console.log(current.data);
          return null
    }
    //remove at index
    removeAt(index){
        if(index > 0 && index > this.size){
            return;
        }
        let current = this.head;
        let previous;
        let count =0;
         if(index ===0){
             this.head = current.next;
         }else{
             while(count<index){
                 count++;
                 previous = current;
                 current = current.next
             }
             previous.next = current.next;
             this.size--;
         }

    }



    // clear the list
     clearList(){
        this.head= null;
        this.size=0;
     }

    //print list

    printList(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next
        }

    }

}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500,12);
ll.getAt(0);
ll.removeAt(99);
ll.printList();


export new LinkedList();
