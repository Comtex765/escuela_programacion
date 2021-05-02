<<<<<<< HEAD
class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const holdgingPointer= this.top;
            this.top = newNode;
            this.top.next = holdgingPointer
        }

        this.length++;

        return this;
    }

    pop(){
        const tempData = this.top.next;
        delete this.top;
        this.top = tempData;
        this.length--;
    }
}

=======
class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const holdgingPointer= this.top;
            this.top = newNode;
            this.top.next = holdgingPointer
        }

        this.length++;

        return this;
    }

    pop(){
        const tempData = this.top.next;
        delete this.top;
        this.top = tempData;
        this.length--;
    }
}

>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
const myStack = new stack();