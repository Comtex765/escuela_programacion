class node{
    constructor(value){
        this.value = value;
        this.next = null;
        tjis.prev = null;
    }
}

class myDoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev = null,
        }
        this.tail = this.head;

        this.length = 1;
    }

    append(value){
        const newNode = new node(value);

        newNode.prev = this.tail;

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        
        return this
    }

}

let myNewDoubly = new myDoublyLinkedList(1);