#include <iostream>
#include <fstream>

using namespace std;

int main(){
    /*ofstream MyFile("GameData.txt");
    string PlayerName = " ";

    if(MyFile.is_open()){
        MyFile << "Hola Mundo!!" << endl;
        MyFile << "Mi nombre es" << endl;

        cout << "Introduce el nombre de tu herore" << endl;
        cin >> PlayerName;
        MyFile << PlayerName;
        
    }
    MyFile.close();*/

    ifstream MyFileRead("GameData.txt");
    string line;
    string HeroName = " ";
    int Renglon = 0;

    if(MyFileRead.is_open()){
        while(getline(MyFileRead, line)){
            Renglon++;
            if(Renglon == 3){
                HeroName = line;
            }
        }

    }else{
        cout << "No se puedo abrir, ver el aintivirus"<<endl;
    }
    cout << "Bienvenida a tu aventura: "<<HeroName<<endl;

    return 0;
}