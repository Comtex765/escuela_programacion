<<<<<<< HEAD
class node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class binarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new node(value);
        if(this.root === null){
            this.root = newNode;
        }else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                  if(!currentNode.left){
                      currentNode.left = newNode;
                      return this;
                  }
                  currentNode = currentNode.left;  
                }else{
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
}

=======
class node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class binarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new node(value);
        if(this.root === null){
            this.root = newNode;
        }else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                  if(!currentNode.left){
                      currentNode.left = newNode;
                      return this;
                  }
                  currentNode = currentNode.left;  
                }else{
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
}

>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
const newTree = new binarySearchTree();