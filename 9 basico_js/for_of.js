var estudiantes=["María", "Sergio", "Rosa", "Daniel"];

function saludoEst(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludoEst(estudiantes[i]);
}

for(var estudiante of estudiantes){
    saludoEst(estudiante)
}