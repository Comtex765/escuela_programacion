<<<<<<< HEAD
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>>

int main()
{
    int mat[3][4];

    int sumPr = 0;
    int sumSg = 0;
    int sumTr = 0;

    for(int i=0; i<=2; i++){
        for(int j=0;j<=3;j++){
            printf("Ingrese el valor en la posicion %i-%i: ",i,j);
            scanf("%i", &mat[i][j]);
            switch(i){
                case 0:
                    sumPr += mat[i][j];
                break;

                case 1:
                    sumSg += mat[i][j];
                    printf("%i \n",sumSg);
                break;

                case 2:
                    sumTr += mat[i][j];
                break;
                }
            }
        }

        printf("La suma de la primera fila es: %i \n",sumPr);
        printf("La suma de la segunda fila es: %i \n",sumSg);
        printf("La suma de la tercera fila es: %i ",sumTr);

    return 0;
}
=======
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>>

int main()
{
    int mat[3][4];

    int sumPr = 0;
    int sumSg = 0;
    int sumTr = 0;

    for(int i=0; i<=2; i++){
        for(int j=0;j<=3;j++){
            printf("Ingrese el valor en la posicion %i-%i: ",i,j);
            scanf("%i", &mat[i][j]);
            switch(i){
                case 0:
                    sumPr += mat[i][j];
                break;

                case 1:
                    sumSg += mat[i][j];
                    printf("%i \n",sumSg);
                break;

                case 2:
                    sumTr += mat[i][j];
                break;
                }
            }
        }

        printf("La suma de la primera fila es: %i \n",sumPr);
        printf("La suma de la segunda fila es: %i \n",sumSg);
        printf("La suma de la tercera fila es: %i ",sumTr);

    return 0;
}
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
