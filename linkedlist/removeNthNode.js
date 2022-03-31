/*

Write a function kthToLastNode() that takes an integer kk and the headNode of a singly-linked list, and returns the kkth to last node in the list.
For example:

  class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode('Angel Food');
const b = new LinkedListNode('Bundt');
const c = new LinkedListNode('Cheese');
const d = new LinkedListNode("Devil's Food");
const e = new LinkedListNode('Eccles');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

kthToLastNode(2, a);
// Returns the node with value "Devil's Food" (the 2nd to last node)
*/

// First approach: use the length of the list.
//
//     walk down the whole list, counting nodes, to get the total listLength.
//     subtract kk from the listLength to get the distance from the head node to the target node (the kth to last node).
// walk that distance from the head to arrive at the target node.
function kthToLastNode(k, head) {

    if (k < 1) {
        throw new Error(`Impossible to find less than first to last node: ${k}`);
    }

    // STEP 1: get the length of the list
    // Start at 1, not 0
    // else we'd fail to count the head node!
    let listLength = 1;
    let currentNode = head;

    // Traverse the whole list,
    // counting all the nodes
    while (currentNode.next) {
        currentNode = currentNode.next;
        listLength += 1;
    }

    // If k is greater than the length of the list, there can't
    // be a kth-to-last node, so we'll return an error!
    if (k > listLength) {
        throw new Error(`k is larger than the length of the linked list: ${k}`);
    }

    // STEP 2: walk to the target node
    // Calculate how far to go, from the head,
    // to get to the kth to last node
    const howFarToGo = listLength - k;

    currentNode = head;
    for (let i = 0; i < howFarToGo; i++) {
        currentNode = currentNode.next;
    }

    return currentNode;
}


// Second approach: maintain a kk-wide "stick" in one walk down the list.
//
//     Walk one pointer kk nodes from the head. Call it rightNode.
//     Put another pointer at the head. Call it leftNode.
//     Walk both pointers, at the same speed, towards the tail. This keeps a distance of kk between them.
//     When rightNode hits the tail, leftNode is on the target (since it's kk nodes from the end of the list).


function removeNthFromEnd(head,n){

    if(n < 1){
        throw new Error(`Impossible to remove less than first to last node:${n}`)
    }

    if(n ===1 && !head.next) return null
    let left= head, right= head, previous=null;

    for (let i = 0; i < n-1; i++) {
        if (!right.next) {
            throw new Error(`k is larger than the length of the linked list: ${n}`);
        }

        right = right.next;
    }

    while(right.next){
        previous = left
        left= left.next;
        right= right.next
    }
    if (!previous) return left.next;
    previous.next = left.next
    return head
};
