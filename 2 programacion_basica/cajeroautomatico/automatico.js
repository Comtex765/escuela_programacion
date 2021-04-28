class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;

    }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);

            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }

            else
            {
                papeles = div;
            }

            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if(dinero > 0)
    {
        resultado.innerHTML = "No tengo esa cantidad"
    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
                prueba.innerHTML = "EL CAJERO TIENE: " + (total - t.value);
                total = total - t.value;

                switch(e.valor)
                {
                    case 100:
                        cambio = caja[0].cantidad - e.cantidad;
                        caja[0].cantidad= cambio;
                        if (caja[0].cantidad <= 0)
                        {
                            caja[0].valor= 0;
                            caja[0].cantidad= 0;
                        }
                    break;
                    case 50:

                        cambio = caja[1].cantidad - e.cantidad;
                        caja[1].cantidad= cambio;
                        if (caja[1].cantidad <= 0)
                        {
                            caja[1].valor= 0;
                            caja[1].cantidad= 0;
                        }
                    break;
                    case 20:

                        cambio = caja[2].cantidad - e.cantidad;
                        caja[2].cantidad= cambio;
                        if (caja[2].cantidad <= 0)
                        {
                            caja[2].valor= 0;
                            caja[2].cantidad= 0;
                        }
                    break;
                }
            }  
        }
    }
    console.log(caja)
}

var caja =[];
var entregado = [];

caja.push(new Billete(100, 25));
caja.push(new Billete(50, 20));
caja.push(new Billete(20, 15));


var dinero = 0;
var div = 0;
var papeles = 0;
var total = caja[0].valor*caja[0].cantidad + caja[1].valor*caja[1].cantidad + caja[2].valor*caja[2].cantidad

console.log(total)

prueba.innerHTML = "EL CAJERO TIENE: " + total;


var r = document.getElementById("reultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);