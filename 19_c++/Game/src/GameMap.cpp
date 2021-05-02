<<<<<<< HEAD
#include <iostream>
#include <fstream>
#include "../Headers/include/GameMap.h"

using namespace std;

GameMap::GameMap()
{
    PlayerCell = NULL;
    LoadMapFromFile();
    isGameOver = false;
}

void GameMap::Draw()
{
    for (int i = 0; i < 15; i++)
    {
        for (int j = 0; j < 10; j++)
        {
            cout << cells[i][j].id;
        }
        cout << endl;
    }
}

bool GameMap::SetPlayerCell(int PlayerX, int PlayerY)
{
    if (cells[PlayerY][PlayerX].IsBlocked() == false)
    {
        if (cells[PlayerY][PlayerX].id == '$')
        {
            DrawVictory();
            isGameOver = true;
            return true;
        }
        else
        {
            if (PlayerCell != NULL)
            {
                PlayerCell->id = ' ';
            }

            PlayerCell = &cells[PlayerY][PlayerX];
            PlayerCell->id = '3';
        }

        return true;
    }
    else
    {
        return false;
    }
}

void GameMap::DrawIntro()
{
    string line;
    int row = 0;
    ifstream MyFile("Intro.txt");

    if (MyFile.is_open())
    {
        while (getline(MyFile, line))
        {
            cout << line << endl;
        }
        cin >> line;
    }
    else
    {
        cout << "No pudo ser cargado el intro";
    }
}

void GameMap::DrawVictory()
{
    string line;
    int row = 0;
    ifstream MyFile("Victory.txt");

    if (MyFile.is_open())
    {
        while (getline(MyFile, line))
        {
            cout << line << endl;
        }
        cin >> line;
    }
    else
    {
        cout << "No pudo ser cargado la victoria";
    }
}

void GameMap::LoadMapFromFile()
{
    /*ofstream FileCreated("Map.txt");
    if(FileCreated.is_open()){

    }else{
        cout<<"NO SE PUDO CREAR EL ARCHIVO";
    }*/

    string line;
    int row = 0;
    ifstream MyFile("Map.txt");

    if (MyFile.is_open())
    {
        while (getline(MyFile, line))
        {
            for (int i = 0; i < line.length(); i++)
            {
                if (line[i] == '0')
                    cells[row][i].id = ' ';
                else
                    cells[row][i].id = line[i];
            }

            row++;
        }
    }
    else
    {
        cout << "No pudo ser cargado el archivo";
    }
}
=======
#include <iostream>
#include <fstream>
#include "../Headers/include/GameMap.h"

using namespace std;

GameMap::GameMap()
{
    PlayerCell = NULL;
    LoadMapFromFile();
    isGameOver = false;
}

void GameMap::Draw()
{
    for (int i = 0; i < 15; i++)
    {
        for (int j = 0; j < 10; j++)
        {
            cout << cells[i][j].id;
        }
        cout << endl;
    }
}

bool GameMap::SetPlayerCell(int PlayerX, int PlayerY)
{
    if (cells[PlayerY][PlayerX].IsBlocked() == false)
    {
        if (cells[PlayerY][PlayerX].id == '$')
        {
            DrawVictory();
            isGameOver = true;
            return true;
        }
        else
        {
            if (PlayerCell != NULL)
            {
                PlayerCell->id = ' ';
            }

            PlayerCell = &cells[PlayerY][PlayerX];
            PlayerCell->id = '3';
        }

        return true;
    }
    else
    {
        return false;
    }
}

void GameMap::DrawIntro()
{
    string line;
    int row = 0;
    ifstream MyFile("Intro.txt");

    if (MyFile.is_open())
    {
        while (getline(MyFile, line))
        {
            cout << line << endl;
        }
        cin >> line;
    }
    else
    {
        cout << "No pudo ser cargado el intro";
    }
}

void GameMap::DrawVictory()
{
    string line;
    int row = 0;
    ifstream MyFile("Victory.txt");

    if (MyFile.is_open())
    {
        while (getline(MyFile, line))
        {
            cout << line << endl;
        }
        cin >> line;
    }
    else
    {
        cout << "No pudo ser cargado la victoria";
    }
}

void GameMap::LoadMapFromFile()
{
    /*ofstream FileCreated("Map.txt");
    if(FileCreated.is_open()){

    }else{
        cout<<"NO SE PUDO CREAR EL ARCHIVO";
    }*/

    string line;
    int row = 0;
    ifstream MyFile("Map.txt");

    if (MyFile.is_open())
    {
        while (getline(MyFile, line))
        {
            for (int i = 0; i < line.length(); i++)
            {
                if (line[i] == '0')
                    cells[row][i].id = ' ';
                else
                    cells[row][i].id = line[i];
            }

            row++;
        }
    }
    else
    {
        cout << "No pudo ser cargado el archivo";
    }
}
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
