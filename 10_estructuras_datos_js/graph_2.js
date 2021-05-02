<<<<<<< HEAD
class graph{
    constructor(){
        this.nodes = 0;
        this.adjacentList = {};
    }
    addVertex(node){
        this.adjacentList[node] = [];
        this.nodes++;
    }
    addEdge(node1, node2){
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}
=======
class graph{
    constructor(){
        this.nodes = 0;
        this.adjacentList = {};
    }
    addVertex(node){
        this.adjacentList[node] = [];
        this.nodes++;
    }
    addEdge(node1, node2){
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
const myGraph = new graph();