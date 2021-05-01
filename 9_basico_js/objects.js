function myCube(marca, modelo, year){
    this.marca  = marca;
    this.modelo = modelo;
    this.year   = year;
}

var ganCube = new myCube("Gan","356X","2020");
var valkCube = new myCube("Valk","Elite 3M","2021");

console.log(ganCube);
console.log(valkCube);