#include <iostream>

using namespace std;

int main()
{
    float radious = 15;
    float pi = 3.1416;
    float circleArea = radious * radious * pi;

    cout <<"El area del circulo es: " << circleArea <<endl;

    float sphereArea = circleArea * 4;

    cout <<"El area de la esfera es: "<<sphereArea <<endl; 


    return 0;
}
