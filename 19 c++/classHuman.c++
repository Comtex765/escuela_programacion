#include <iostream>

using namespace std;

class Human{
    public:
        Human(int spawnAge){
            age = spawnAge;
        }

        void Think(){
            cout << getThinkMessage() << endl;
        }
        int age;
    private:

        int socialLevel;
        int intelligence;
        int luck;

        string getThinkMessage(){
            if(socialLevel + luck > 100){
                return "Estoy teniendo pensamientos felices";
            }else if(luck > intelligence){
                return "Soy un suertudo";
            }else if(age > 18){
                return "Soy mayor de edad" ;
            }else{
                return "No estoy pensando nada bueno ni nada interesante";
            }
        }
};

int main(){
    Human bobFirstHuman(19);

    bobFirstHuman.Think();

    return 0;
}