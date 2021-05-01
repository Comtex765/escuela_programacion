var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito"); 
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujar_Linea(color, x_inicial, y_inicial, x_final, y_final)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l=0;
    var yi, xf;
    var colorcito = "black";

    for(l = 0; l < lineas; l++)
    {
        yi = ancho/lineas * l;
        xf = ancho/lineas * (l + 1);
        dibujar_Linea(colorcito, 0, yi, xf, ancho);
    }

    dibujar_Linea(colorcito,1,1,1,ancho - 1)
    dibujar_Linea(colorcito,1,ancho - 1,ancho - 1,ancho - 1)
}