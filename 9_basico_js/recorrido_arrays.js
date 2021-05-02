<<<<<<< HEAD
var articulos = [
    {nombre: "Bici"   , costo:    3000},
    {nombre: "TV"     , costo:     700},
    {nombre: "Carro"  , costo:  354000},
    {nombre: "Laptop" , costo:     900},
    {nombre: "Teclado", costo:    3250}
];

// con .filter var articulosFilt = articulos.filter(function(articulo){
//     return articulo.costo <= 3000
// });

// console.log(articulosFilt)

// con .map var nombreArt = articulos.map(function(articulo){
//     return articulo.nombre
// });

// console.log(nombreArt)

// con .find var encontrarArt = articulos.find(function(articulo){
//     return articulo.costo === 354000;
// });

// console.log(encontrarArt);

// con .forEach articulos.forEach(function(articulo){
//     console.log(articulo.nombre);
// });

var articuloBarato = articulos.some(function(articulo){
    return articulo.costo <= 3000;
});

=======
var articulos = [
    {nombre: "Bici"   , costo:    3000},
    {nombre: "TV"     , costo:     700},
    {nombre: "Carro"  , costo:  354000},
    {nombre: "Laptop" , costo:     900},
    {nombre: "Teclado", costo:    3250}
];

// con .filter var articulosFilt = articulos.filter(function(articulo){
//     return articulo.costo <= 3000
// });

// console.log(articulosFilt)

// con .map var nombreArt = articulos.map(function(articulo){
//     return articulo.nombre
// });

// console.log(nombreArt)

// con .find var encontrarArt = articulos.find(function(articulo){
//     return articulo.costo === 354000;
// });

// console.log(encontrarArt);

// con .forEach articulos.forEach(function(articulo){
//     console.log(articulo.nombre);
// });

var articuloBarato = articulos.some(function(articulo){
    return articulo.costo <= 3000;
});

>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
console.log(articuloBarato);