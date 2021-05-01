#include <iostream>

using namespace std;

class Mage{

    public:
        Mage(int basePower, int baseHP){
            power = basePower;
            hp = baseHP;
        }

        float damage(){
            return power;
        }

        void getDamage(int value){
            hp -= value;
            cout << "Mi mago tiene: "<<hp<<" de vida"<<endl;
        }


    protected:
        int power, hp;
};

class IceMage : public Mage{
    public:
        IceMage(int basePower, int baseHP) : Mage(basePower, baseHP){
            power = basePower + 10;
            hp = baseHP;
        }
};

class FireMage : public Mage{
    public:
        FireMage(int basePower, int baseHP) : Mage(basePower, baseHP){
            power = basePower;
            hp = baseHP + 15;
        }
};



int main(){
    Mage* currentMage;

    FireMage fernad(15,200);
    IceMage alejadr(15,200);

    currentMage = &fernad;

    currentMage->getDamage(10);

    currentMage = &alejadr;

    currentMage ->getDamage(15);

    
    return 0;
}