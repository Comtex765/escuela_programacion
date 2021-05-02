<<<<<<< HEAD
var express = require("express");
var app = express();

app.get("/", inicio );
app.get("/cursos", cursos);

function inicio(peticion, resultado)
{
    resultado.send("Este es el <strong>home</strong>");
}

function cursos(peticion, resultado)
{
    resultado.send("Estos son los <strong>cursos</strong> wuuu");
}

app.listen(8989);


=======
var express = require("express");
var app = express();

app.get("/", inicio );
app.get("/cursos", cursos);

function inicio(peticion, resultado)
{
    resultado.send("Este es el <strong>home</strong>");
}

function cursos(peticion, resultado)
{
    resultado.send("Estos son los <strong>cursos</strong> wuuu");
}

app.listen(8989);


>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
