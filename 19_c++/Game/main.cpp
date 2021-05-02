<<<<<<< HEAD
#include <iostream>
#include "./Headers/include/Player.h"
#include "./Headers/include/MapCell.h"
#include "./Headers/include/GameMap.h"
#include "./src/Player.cpp"
#include "./src/MapCell.cpp"
#include "./src/GameMap.cpp"

using namespace std;

int main()
{

    GameMap Map;
    Player Hero;

    Map.DrawIntro();
    Map.Draw();

    while (Map.isGameOver == false)
    {
        //Aqui es el loop de nuestro juego
        cout << "Introduce el movimiento [W][A][S][D]"<<endl;
        Hero.CallInput();

        //Actualizado informacoin mapa
        if(Map.SetPlayerCell(Hero.x, Hero.y)){
            Map.Draw();
        }else{
            Hero.ResetToSafePosition();
            Map.Draw();
        }


        //Aqui se dibuja el mapa
        Map.Draw();

    }

    return 0;
=======
#include <iostream>
#include "./Headers/include/Player.h"
#include "./Headers/include/MapCell.h"
#include "./Headers/include/GameMap.h"
#include "./src/Player.cpp"
#include "./src/MapCell.cpp"
#include "./src/GameMap.cpp"

using namespace std;

int main()
{

    GameMap Map;
    Player Hero;

    Map.DrawIntro();
    Map.Draw();

    while (Map.isGameOver == false)
    {
        //Aqui es el loop de nuestro juego
        cout << "Introduce el movimiento [W][A][S][D]"<<endl;
        Hero.CallInput();

        //Actualizado informacoin mapa
        if(Map.SetPlayerCell(Hero.x, Hero.y)){
            Map.Draw();
        }else{
            Hero.ResetToSafePosition();
            Map.Draw();
        }


        //Aqui se dibuja el mapa
        Map.Draw();

    }

    return 0;
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
}