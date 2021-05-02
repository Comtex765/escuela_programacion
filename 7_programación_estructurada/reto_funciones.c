<<<<<<< HEAD
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>>

char alumno[500];
int nota;

int main() {
  printf("Ingresa el nombre del alumno: ");
  gets(alumno);

  printf("Ingresa la nota: ");
  scanf("%i", &nota);

  int hola = aprobar(nota);
}

void aprobar(int a){
  if (a >= 7){
    puts(alumno);
    printf("%c aprobó");
  }
  else{
    printf("no aprobó");
  }
}
=======
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>>

char alumno[500];
int nota;

int main() {
  printf("Ingresa el nombre del alumno: ");
  gets(alumno);

  printf("Ingresa la nota: ");
  scanf("%i", &nota);

  int hola = aprobar(nota);
}

void aprobar(int a){
  if (a >= 7){
    puts(alumno);
    printf("%c aprobó");
  }
  else{
    printf("no aprobó");
  }
}
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
