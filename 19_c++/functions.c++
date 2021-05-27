#include <iostream>

using namespace std;

void PrintCuteMessage()
{
    cout << "Eres increible!! " << endl;
    cout << ":D" << endl;
}

bool IsPayerDead(int hp)
{
    if (hp <= 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

int main()
{
    int TotalLife = 0;

    if (IsPayerDead(TotalLife))
    {
        cout << "Game Over";
    }

    return 0;
}