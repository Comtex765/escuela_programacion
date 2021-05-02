<<<<<<< HEAD
var imagenes = [];

imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];

coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));



for(var pakin of coleccion)
{
    pakin.mostrar();
}

for(var x in coleccion[0])
{
    console.log(x);
=======
var imagenes = [];

imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];

coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));



for(var pakin of coleccion)
{
    pakin.mostrar();
}

for(var x in coleccion[0])
{
    console.log(x);
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
}