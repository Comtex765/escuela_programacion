#include <iostream>

using namespace std;

int main()
{
    int Math = 0;
    int Biology = 0;

    cout <<"Cuanto sacaste en Matematicas?" <<endl;
    cin >> Math;
    
    cout <<"Cuanto sacaste en Biologia?" <<endl;
    cin >> Biology;

    if (Math > 6)
    {
        cout<<"El alumno esta aprobado en matematicas"<<endl;
    }else{
        cout<<"El alumno reprobo matematicas"<< endl;
    }
    
    switch (Biology)
    {
    case 10:
        cout <<"El alumno tuvo la mayor calificaci0n"<<endl;
        break;
    
    default:
        break;
    }
    
    


    return 0;
}
