//1er paso dividir el valor entre 2 y el resto guardarlo en un array
//2do paso repetir paso 1
//3er reperir hasta que nuestro numero inicial ya no sea divisible

#include <stdio.h>
#include <stdlib.h>

int binaryNumber[12], n, i;

int main(){
    system("cls");
    system("color 9F");
    printf("Ingresa el valor decimal a convertir:\n");
    scanf("%d", &n);
    for (i = 0; n > 0; i++)
    {
        binaryNumber[i] = n%2;
        n /= 2; 
    }
    
    printf("La conversion es: ");
    for (i = i - 1; i >= 0; i--)
    {
        printf("%d",binaryNumber[i]);
    }
    
    
    return 0;
}