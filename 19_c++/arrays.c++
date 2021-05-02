<<<<<<< HEAD
#include <iostream>

using namespace std;

void DrawMap(int HeroPosX, int HeroPosY, char GameMap[5][5])
{
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            if (i != HeroPosY)
            {
                cout << GameMap[i][j];
            }
            else
            {
                if (j != HeroPosX)
                {
                    cout << GameMap[i][j];
                }
                else
                {
                    cout << 'H';
                }
            }
        }
        cout << endl;
    }
    cout << endl;
}

int main()
{
    int HeroPosX = 1;
    int HeroPosY = 4;

    bool isGameOver = false;

    char Input = ' ';
    char GameMap[5][5] = {
        {'1', '1', '1', '1', '1'},
        {'1', '1', '1', '1', '1'},
        {'1', '1', '1', '1', '1'},
        {'1', '1', '1', '1', '1'},
        {'1', '1', '1', '1', '1'}
    };

    while (isGameOver == false)
    {
        DrawMap(HeroPosX, HeroPosY, GameMap);

        cin >> Input;

        switch (Input)
        {
        case 'a':
            HeroPosX--;
            break;
        case 'd':
            HeroPosX++;
            break;
        case 'w':
            HeroPosY--;
            break;
        case 's':
            HeroPosY++;
            break;
        case 'p':
            isGameOver = true;
            break;
        }
    }
    return 0;
}
=======
#include <iostream>

using namespace std;

void DrawMap(int HeroPosX, int HeroPosY, char GameMap[5][5])
{
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            if (i != HeroPosY)
            {
                cout << GameMap[i][j];
            }
            else
            {
                if (j != HeroPosX)
                {
                    cout << GameMap[i][j];
                }
                else
                {
                    cout << 'H';
                }
            }
        }
        cout << endl;
    }
    cout << endl;
}

int main()
{
    int HeroPosX = 1;
    int HeroPosY = 4;

    bool isGameOver = false;

    char Input = ' ';
    char GameMap[5][5] = {
        {'1', '1', '1', '1', '1'},
        {'1', '1', '1', '1', '1'},
        {'1', '1', '1', '1', '1'},
        {'1', '1', '1', '1', '1'},
        {'1', '1', '1', '1', '1'}
    };

    while (isGameOver == false)
    {
        DrawMap(HeroPosX, HeroPosY, GameMap);

        cin >> Input;

        switch (Input)
        {
        case 'a':
            HeroPosX--;
            break;
        case 'd':
            HeroPosX++;
            break;
        case 'w':
            HeroPosY--;
            break;
        case 's':
            HeroPosY++;
            break;
        case 'p':
            isGameOver = true;
            break;
        }
    }
    return 0;
}
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
