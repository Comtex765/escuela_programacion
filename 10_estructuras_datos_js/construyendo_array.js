<<<<<<< HEAD
class myArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

    shiftIndex(index){
        for(let i = index; i <this.length - 1; i ++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    popFirst(){
        const firstItem = this.data[0];
        delete this.data[0];
        this.shiftIndex(0);
        return firstItem
    }

    pushFirst(item){
        this.increeseIndex();
        this.data[0] = item;
        return this.data;
    }

    increeseIndex(){
        for(let i = this.length - 1; i >= 0 ; i --){
            this.data[i + 1] = this.data[i];
        }
        this.length++;
    }
}

=======
class myArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

    shiftIndex(index){
        for(let i = index; i <this.length - 1; i ++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    popFirst(){
        const firstItem = this.data[0];
        delete this.data[0];
        this.shiftIndex(0);
        return firstItem
    }

    pushFirst(item){
        this.increeseIndex();
        this.data[0] = item;
        return this.data;
    }

    increeseIndex(){
        for(let i = this.length - 1; i >= 0 ; i --){
            this.data[i + 1] = this.data[i];
        }
        this.length++;
    }
}

>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
const myArray1 = new myArray();