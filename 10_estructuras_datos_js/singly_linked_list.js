<<<<<<< HEAD
class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }

}

class mySinglyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this
    }

    prepend(value){
        const newNode = new node(value);
        newNode.next = this.head;
        this.head= newNode;
        this.length++;
        return this;
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = new node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length++;
        return this;
    }
   
    getTheIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    
}

let myNewSingly = new mySinglyLinkedList(1);
=======
class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }

}

class mySinglyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this
    }

    prepend(value){
        const newNode = new node(value);
        newNode.next = this.head;
        this.head= newNode;
        this.length++;
        return this;
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = new node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length++;
        return this;
    }
   
    getTheIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    
}

let myNewSingly = new mySinglyLinkedList(1);
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12