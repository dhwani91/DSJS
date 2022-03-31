/*
*  Question : You have a singly-linked list ↴ and want to check if it contains a cycle.
* */

function LinkedListNode(value, next=null) {
    this.value = value;
    this.next = null;
}

function detectCycle (head){
    console.log("head", head)
    let fastRunner = head;
    let slowRunner = head;

    while(fastRunner && fastRunner.next){
        slowRunner= head.next;
        fastRunner = head.next.next

        if(fastRunner === slowRunner){
            return findFirstNodeInCycle(head, fastRunner)
        }
    }
    return null
}

function findFirstNodeInCycle(head, fastRunner){
    let fast= fastRunner ;
    let slow = head;
    while(fast!== slow){
        fast = head.next;
        slow = head.next;
    }
    console.log("slow", slow)
    return slow
}

const  p1 = new LinkedListNode(1);
const  p2 = new LinkedListNode(2);
const  p3 = new LinkedListNode(3);
const  p4 = new LinkedListNode(4);

p1.next =p2;
p2.next=p3;
p3.next =p4;
p4.next=p1;


const cyclePos= detectCycle(p1);
console.log("cycle",cyclePos)