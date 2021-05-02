<<<<<<< HEAD
#ifndef GAMEMAP_H
#define GAMEMAP_H

#include "./MapCell.h"

class GameMap{
    public:
        GameMap();  
        
        MapCell* PlayerCell;
        MapCell cells[15][10];

        void DrawIntro();
        void Draw();
        void DrawVictory();

        bool SetPlayerCell(int PlayerX, int PlayerY);
        bool isGameOver = false;


        
    protected:

        void LoadMapFromFile();


    private:
};

=======
#ifndef GAMEMAP_H
#define GAMEMAP_H

#include "./MapCell.h"

class GameMap{
    public:
        GameMap();  
        
        MapCell* PlayerCell;
        MapCell cells[15][10];

        void DrawIntro();
        void Draw();
        void DrawVictory();

        bool SetPlayerCell(int PlayerX, int PlayerY);
        bool isGameOver = false;


        
    protected:

        void LoadMapFromFile();


    private:
};

>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
#endif // GAMEMAP_H