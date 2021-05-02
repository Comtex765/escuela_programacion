<<<<<<< HEAD
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>>

int main()
{
    int reto[7];
    int mult = 1;

    for(int i=1; i <= 7; i++){
        printf("Ingresa el valor # %i: ", i);
        scanf("%i",&reto[i]);
        mult *= reto[i];
    }

    printf("La multiplicacion resulto dar: %i", mult);

    return 0;
}
=======
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>>

int main()
{
    int reto[7];
    int mult = 1;

    for(int i=1; i <= 7; i++){
        printf("Ingresa el valor # %i: ", i);
        scanf("%i",&reto[i]);
        mult *= reto[i];
    }

    printf("La multiplicacion resulto dar: %i", mult);

    return 0;
}
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
