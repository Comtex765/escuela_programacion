<<<<<<< HEAD
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
=======
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
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
