var estudiantes=["María", "Sergio", "Rosa", "Daniel"];

function saludoEst(estudiante){
    console.log(`Hola como estás, ${estudiante}`);
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludoEst(estudiante);
}