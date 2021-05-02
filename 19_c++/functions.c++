<<<<<<< HEAD
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
=======
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
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
}