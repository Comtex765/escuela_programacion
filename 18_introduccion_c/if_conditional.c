#include <stdio.h>

int n = -5;

int main(){
    if(n  > 10 && n <20)
        printf("El número es mayor que 10");
    else if(n ==10)
        printf("El número es igual a 10");
    else if(n > 20)
        printf("El número es mayor que 20");
    else if (n < 10 && n >= 0)
        printf("El número es menor que diez");
    else 
        printf("Es un número negativo");
    return 0;
}