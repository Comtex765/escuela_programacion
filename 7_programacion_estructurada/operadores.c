#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>>

int main()
{
    int rSum;
    float rRes;
    float rDiv;
    float rMult;
    int rMod;

    rSum = 7 + 3;
    rRes = 5.3 - 45.69;
    rDiv = 7.6 / 5.6;
    rMult = 15.6 * 56;
    rMod = 8/3;

    printf("Resultado de la suma: %i \n", rSum);
    printf("Resultado de la resta: %f \n", rRes);
    printf("Resultado de la división: %f \n", rDiv);
    printf("Resultado de la multiplicación: %f \n", rMult);
    printf("Resultado del módulo: %i \n", rMod);

    return 0;
}
