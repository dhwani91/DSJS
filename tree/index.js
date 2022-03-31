/* remove tree node: https://dev.to/jenshaw/deleting-nodes-in-binary-search-trees-4nhm */

class Node{
    constructor(data, left=null, right=null) {
        this.data= data;
        this.left= left;
        this.right = right;
    }
}

class Tree{
 constructor(){
     this.root= null
     this.insertNode = this.insertNode.bind(this);
 }

 addNode(data){
     const newNode= new Node(data)
     if(!this.root){
         this.root = data
     }else{
         insertNode(this.root, newNode)
     }
 }

 insertNode(node, newNode){
    if(newNode.data < node.data){
        if(!node.left){
            node.left= newNode
        }else{
          this.insertNode(node.left, newNode)
        }
    }
    else{
        if(!node.right){
            node.right= newNode
        }else{
            this.insertNode(node.right, newNode)
        }
    }
 }

 min(){
    let currentNode = this.root;
    while(currentNode.left){
        currentNode = currentNode.left
    }
     return currentNode.data
 }

 max(){
    let currentNode = this.root;
    while(currentNode.right){
        currentNode = currentNode.right
    }
    return currentNode.data
 }

 contains(val){
        let currentNode = this.root
        while(currentNode){
            if(currentNode.data ===  val) return true
            if(val < currentNode.data){
                currentNode = currentNode.left
            }else{
                currentNode = currentNode.right
            }
        }
        return false
    }

 inOrderRecursive(node){
     //left, root,right
     let stack =[]
     function traverse(root){
        if(node.left) traverse(node.left)
         stack.push(node)
         if(node.right) traverse(node.right)
     }
     return stack
 }

 inOrderIterative(root){
     if(root === null) return;
     const stack=[];
     while(true){
         if(root !==null){
             stack.push(root)
             root = root.left
         }else{
             if(!!stack) break;
             let root = stack.pop
             root = root.right
         }
     }
 }

 preOrderRecursive(){
     //root,left,right
     let stack =[]
      const traverse =node => {
         stack.push(node)
          if(node.left) traverse(node.left)
          if(node.right) traverse(node.right)
      }
       return stack
 }
 postOrderRecursive(){
        //left,right,root
        let stack =[]
        const traverse =node => {
            if(node.left) traverse(node.left)
            if(node.left) traverse(node.right)
            stack.push(node.data)
        }
        return stack
    }

 preOrderIterative(root) {
     //root,left,right
     if(root === null) return;
     const stack =[]
     while(stack.length !== 0){
       root = stack.pop()
         if(root.right  !==null{
             s.push(root)
         }
         if(root.left !==null){
             s.push(root)
         }
     }
 }

 bfs(){
     let result= []
     let queue =[]
     queue.push(this.root)
      while(queue.length){
        const currentNode=  queue.shift()
          result.push(currentNode)
        if(currentNode.left){
            queue.push(currentNode.left)
        }
        if(currentNode.right){
            queue.push(currentNode.right)
        }
      }
 }

 remove(value) {
     const removeNode = (node, value) => {
         // if no node exists, return null
         if(!node)  return  null
         // *** COMPARE TARGET AND NODE VALUES BELOW***
         if(value === node.data){// if they match,

             // the node is a leaf,
             if(!node.left && !node.right) {
                 // delete the node
                 return null
             }
             // if there isn't a left child,
             if(!node.left){
                 // then replace node with right child
                 return node.right;
             }
              //if there isn't right child
             if(!node.right){
                 // then replace node with left child
                 return node.left
             }
             // node has children
             // assigning right child node to temp
             let temp = node.right;
             // while there is a left child,
             while(!temp.left){
                 // traverse along left branches
                 temp = temp.left
             }
             // replace node value with temp value
             node.data = temp.data
             // delete leaf
             node.right = removeNode(node.right, temp.data);
             // remove node
         }
         else if(value < node.data){// if target value is lesser than node value,
             // search and remove target in left subtree
             node.left = removeNode(node.left, value)
             // return updated node after removal
             return node
         }
         else{
             // if target value is greater than node value
             // search and remove target in right subtree
             node.right = removeNode(node.right, value);
             // return updated node after removal
             return node;
         }
     }
     this.root = removeNode(this.root, value);
    }
}

var BST = new Tree(6);
console.log("The root val for BST : ", BST.root.val)
BST.addNode(4);
BST.addNode(9);
BST.addNode(5);
BST.addNode(2);
BST.addNode(8);
BST.addNode(12);

BST.inOrder(BST.root);
