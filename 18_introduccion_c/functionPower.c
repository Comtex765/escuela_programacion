<<<<<<< HEAD
#include <stdio.h>

int power(int base, int n);

int main(){
    int i;
    for (i = 0; i <= 10; i++)
    {
        printf("n = %d -- potenia = %d\n", i, power(2,i));
    }
    return 0;
}

int power(int base, int n){
    int i, p;
    p = 1;
    for (i = 1; i <= n; i++)
    {
        p = p * base;
    }
    return p;
=======
#include <stdio.h>

int power(int base, int n);

int main(){
    int i;
    for (i = 0; i <= 10; i++)
    {
        printf("n = %d -- potenia = %d\n", i, power(2,i));
    }
    return 0;
}

int power(int base, int n){
    int i, p;
    p = 1;
    for (i = 1; i <= n; i++)
    {
        p = p * base;
    }
    return p;
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
}