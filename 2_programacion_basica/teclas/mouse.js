document.addEventListener("mousemove", dibujarMouse);


var estado = 0;
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x;
var y;

function dibujar_Linea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujarMouse(evento)
{

    
    document.addEventListener("mouseup", desactivar);
    document.addEventListener("mousedown", activar);

    function activar(evento)
    {
        estado = 1;
    }

    function desactivar(evento)
    {
        estado = 0;
        x = evento.xlayer;
        y = evento.ylayer;
    }

    if (estado == 1)
    {
        var xlayer = evento.layerX;
        var ylayer = evento.layerY;
        var colorcito = "black";

        if (xlayer <= cuadrito.width && ylayer <= cuadrito.height)
        {
            dibujar_Linea(colorcito, x , y,xlayer, ylayer, papel);
            x = xlayer;
            y = ylayer;

        }
    }
}
