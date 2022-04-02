class Heap {
    constructor() {
        this.storage =[];
        this.size=0
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)

    }
     getLeftChildIndex(index){
        return 2 * index + 1;
     }

     getRightChildIndex(index){
        return 2 * index + 2;
     }
     hasParentIndex(index){
        return this.getParentIndex(index) >0

     }
    hasLeftIndex(index){
        return this.getLeftChildIndex(index) < this.size
    }
    hasRightIndex(index){
        return this.getRightChildIndex(index) < this.size
    }

    parent(index){
        return this.storage[this.getParentIndex(index)]

    }

    leftChild(index){
        return this.storage[this.getLeftChildIndex(index)]

    }

    rightChild(index){
        return this.storage[this.getRightChildIndex(index)]
    }

    swap(index1, index2){
        const temp = this.storage[index1];
        this.storage[index1] = this.storage[index2]
        this.storage[index2] = temp;
    }

    heapifyUpIterative(){
        let index= this.size -1;
        while(this.hasParentIndex(index) && this.parent(index) > this.storage[index]){
            this.swap(this.getParentIndex(index) , index)
            index = this.getParentIndex(index)

        }
    }

    heapifyUpRecursive(index){
        if(this.hasParentIndex(index) && this.parent(index) > this.storage[index]){
            this.swap(this.getParentIndex(index) , index)
            index = this.getParentIndex(index)
        }
    }

    insert(data){
        // insert data at the last position
        this.storage[this.size]= data;

        // increment the size
        this.size +=1;

        // make sure inserted data is in the right place
        this.heapifyUpIterative()

        this.heapifyUpRecursive(this.size -1 )

    }

    heapifyDownIterative(){
        let index =0;
        while(this.hasLeftIndex(index)){
            let smallestChildIndex = this.getLeftChildIndex(index);
            if(this.hasRightIndex(index) && this.getRightChildIndex(index) < this.getLeftChildIndex(index)){
                smallestChildIndex = this.getRightChildIndex(index)
            }
             if(this.storage[index] < this.storage[smallestChildIndex]){
                 break;
             }
             this.swap(index, smallestChildIndex)
            index = smallestChildIndex;

        }


    }
    heapifyDownRecursive(index){
        if(this.hasLeftIndex(index)){
            let smallestChildIndex = this.getLeftChildIndex(index);
            if(this.hasRightIndex(index) && this.getRightChildIndex(index) < this.getLeftChildIndex(index)){
                smallestChildIndex = this.getRightChildIndex(index)
            }
            if(this.storage[index] < this.storage[smallestChildIndex]){
                break;
            }
            this.swap(index, smallestChildIndex)
            index = smallestChildIndex;

        }

    }

    remove(){
        if(this.size == 0){
            throw  new Error(" empty Heap")
        }
        let data = this.storage[0];
        this.storage[0] = this.storage[this.size -1];
        this.size -=1;
        this.heapifyDownIterative()
        return data;

    }



}