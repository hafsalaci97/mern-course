class Node {
    constructor(val) {
        this.data = val;
        this.next = null;              
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    //add value to the front
    addFront(val) {
        let new_node = new Node(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    //remove value from the front
    removeFront() {
        if (!this.head) return null;
        let valueRemoved = this.head.val;
        this.head = this.head.next;
        return valueRemoved;
    }
    //print "value"
    front(){
        if (!this.head) return null;
        return this.head.data;
    }
    //print all nodes in the list
    display(){
        let currentNode = this.head;
        while (currentNode != null){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}
let LL = new SLL();
LL.addFront(9);
LL.addFront(10);
LL.addFront(11);
LL.display();
LL.removeFront();
LL.front();
// console.dir(LL, {depth: 3});
console.log(LL);
console.log(LL.front());