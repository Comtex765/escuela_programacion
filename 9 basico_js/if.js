var scissors = 1;
var stone = 2;
var paper = 3;

choose(3,1)

function choose(user, cpu){
    if (user == cpu){
        console.log("EMPATE TECNICO");
    }
    else{
        if(user == 1 && cpu == 3){
            console.log("Ganó usuario con tijeras a papel");
        }
        else if(user == 2 && cpu == 1){
            console.log("Ganó usuario con piedra a tijera");
        }
        else if(user == 3 && cpu == 2){
            console.log("Ganó usuario con papel a piedra");
        }
        else if(cpu == 1 && user == 3){
            console.log("Ganó cpu con tijeras a papel");
        }
        else if(cpu == 2 && user == 1){
            console.log("Ganó cpu con piedra a tijera");
        }
        else if(cpu == 3 && user == 2){
            console.log("Ganó cpu con papel a piedra");
        }
    }
}