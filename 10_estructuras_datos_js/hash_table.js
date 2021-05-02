<<<<<<< HEAD
class hashTable{
    constructor(size){
        this.data = new Array(size);
    }
    hashMethod(key){
        let hash = 0;
        for(let i = 0; i < key.length; i ++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value){
        const address = this.hashMethod(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] == key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    delete(key){
        let deletedElement = [];
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] == key){
                    deletedElement = [currentBucket[i][0], currentBucket[i][1]];
                    delete(this.data[address]);
                }
            }
        }
        return deletedElement;
    }
}

=======
class hashTable{
    constructor(size){
        this.data = new Array(size);
    }
    hashMethod(key){
        let hash = 0;
        for(let i = 0; i < key.length; i ++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value){
        const address = this.hashMethod(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] == key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    delete(key){
        let deletedElement = [];
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] == key){
                    deletedElement = [currentBucket[i][0], currentBucket[i][1]];
                    delete(this.data[address]);
                }
            }
        }
        return deletedElement;
    }
}

>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
const myHashTable = new hashTable(50);