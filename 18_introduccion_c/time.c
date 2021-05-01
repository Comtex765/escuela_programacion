#include <stdio.h>
#include <time.h>

/*
time_t seconds;

int main(){
    seconds = time(NULL);
    printf("El numero de horas desde EPOCH 1ro de Enero de 1970 a las 00:00 es: %ld \n", seconds/3600);

    return 0;
}*/

time_t begin, end;

int main(){
    long i;
    begin = time(NULL);
    for (i = 0; i < 600000000; i++);

    end = time(NULL);
    printf("El tiempo que se demoro el for es de: %f\n", difftime(end, begin));
    
}