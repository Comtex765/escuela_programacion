#include <iostream>
#include "../Headers/include/Player.h"

using namespace std;

Player::Player(){
    x = 1;
    y = 1;
}

void Player::CallInput(){
    char UserInput = ' ';
    cin >> UserInput;

    switch (UserInput)
    {
    case 'w':

        lastY = y;
        y--;
        break;
    case 's':

        lastY = y;
        y++;
        break;
    case 'a':

        lastX = x;
        x--;
        break;
    case 'd':

        lastX = x;   
        x++;
        break;
    default:
        break;
    }
}

void Player::ResetToSafePosition(){
    x = lastX;
    y = lastY;
}
