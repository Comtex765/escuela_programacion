#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>>

int main()
{
    char cadena[500];
    char cadenaI[500];
    int size;

    printf("Ingresa tu cadena de caracteres: \n");
    gets(cadena);

    size = strlen(cadena);

    printf("\n La cadena sin invertir es: ");
    puts(cadena);

    for(int i=0;i<size;i++){
        cadenaI[size-i] = cadena[i];
    }

    printf("\n La cadena invertida es: ");
    puts(cadenaI);


    return 0;
}
