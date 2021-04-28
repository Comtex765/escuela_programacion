#include<stdio.h>
#include<string.h>

int main(){
    char string1[60];

    printf("Escribe una frase:\n");
    gets(string1);

    strrev(string1);

    printf("El nuevo string es: \n%s",string1);

    return 0;
}