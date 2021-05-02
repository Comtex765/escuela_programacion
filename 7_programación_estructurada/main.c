<<<<<<< HEAD
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>>

int main()
{
    int integerA;
    int integerB;
    int tradeAB;

    printf("Ingresa el valor de X: ");
    scanf("%i", &integerA);

    tradeAB = integerA;

    printf("Ingresa el valor de Y: ");
    scanf("%i", &integerB);

    integerA = integerB;
    integerB = tradeAB;

    printf("El valor de X ahora es: %i \n", integerA);
    printf("El valor de Y ahora es: %i \n", integerB);

    return 0;
}
=======
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>>

int main()
{
    int integerA;
    int integerB;
    int tradeAB;

    printf("Ingresa el valor de X: ");
    scanf("%i", &integerA);

    tradeAB = integerA;

    printf("Ingresa el valor de Y: ");
    scanf("%i", &integerB);

    integerA = integerB;
    integerB = tradeAB;

    printf("El valor de X ahora es: %i \n", integerA);
    printf("El valor de Y ahora es: %i \n", integerB);

    return 0;
}
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
