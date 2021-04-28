class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class queue{
    constructor(){
        this.last = null;
        this.first = null;
        this.length = 0;
    }

    peek(){
        return this.first;
    }

    enqueue(value){
        const newNode = new node(value);
        if(this.length === 0){
            this.last = newNode;
            this.first = newNode;
        }else{
            const holdgingPointer= this.last;
            this.last = newNode;
            this.last.next = holdgingPointer
        }

        this.length++;

        return this;
    }

    dequeue(){
        var tempData;
        var currentQueue = this.last;
        for(let i = this.length; i > 0; i--)
            if(i == 2){
                tempData = currentQueue;
                delete this.first;
                this.first = tempData;
                this.length--;
            }else{
                currentQueue = currentQueue.next;
            }
        }
    }

const myQueue = new queue();