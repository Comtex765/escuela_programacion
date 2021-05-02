<<<<<<< HEAD
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);




var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = cuadrito.width / 2;
var y = cuadrito.height/2;


dibujar_Linea("red", x-1,y-1,x+1,y+1, papel)

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

function dibujarTeclado(evento)
{
  



  
      var colorcito = "red";
      var movimiento = 3;
      switch(evento.keyCode)
      {
          case teclas.UP:
              dibujar_Linea(colorcito, x, y,x, y - movimiento, papel );
              y = y - movimiento;
          break;
          case teclas.DOWN:
              dibujar_Linea(colorcito, x, y,x, y + movimiento, papel );
              y = y + movimiento;
          break;
          case teclas.RIGHT:
              dibujar_Linea(colorcito, x , y,x+ movimiento, y, papel);
              x = x + movimiento;
          break;
          case teclas.LEFT:
              dibujar_Linea(colorcito, x , y,x- movimiento, y, papel);
              x = x - movimiento;
          break;
          default:
              console.log("otra tecla");
          break;
      }
}
=======
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);




var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = cuadrito.width / 2;
var y = cuadrito.height/2;


dibujar_Linea("red", x-1,y-1,x+1,y+1, papel)

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

function dibujarTeclado(evento)
{
  



  
      var colorcito = "red";
      var movimiento = 3;
      switch(evento.keyCode)
      {
          case teclas.UP:
              dibujar_Linea(colorcito, x, y,x, y - movimiento, papel );
              y = y - movimiento;
          break;
          case teclas.DOWN:
              dibujar_Linea(colorcito, x, y,x, y + movimiento, papel );
              y = y + movimiento;
          break;
          case teclas.RIGHT:
              dibujar_Linea(colorcito, x , y,x+ movimiento, y, papel);
              x = x + movimiento;
          break;
          case teclas.LEFT:
              dibujar_Linea(colorcito, x , y,x- movimiento, y, papel);
              x = x - movimiento;
          break;
          default:
              console.log("otra tecla");
          break;
      }
}
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
