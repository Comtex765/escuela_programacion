#include <stdio.h>
int option1 = 0;
int option2 = 1;

int main()
{
    //Este programa genera menus segun la decision del usuario
    if (option1 == 0)
    {
        printf("Opcion 0 \n");
        if (option2 == 0)
            printf("Primera Bebida");
        else if (option2 == 1)
            printf("Segunda Bebida");
        else
            printf("Opcion invalida");
    }
}