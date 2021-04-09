from random import randint
import os
import time
def read_data():
    """[Read data's file]

    Returns:
        [array]: [return an array from data.txt]
    """
    with open("./archivos/data.txt", "r", encoding="utf-8") as f:
            data = [line for line in f]
    return data
def normalize(s):
    replacements = (
        ("á", "a"),
        ("é", "e"),
        ("í", "i"),
        ("ó", "o"),
        ("ú", "u"),
    )
    for a, b in replacements:
        s = s.replace(a, b).replace(a.upper(), b.upper())
    return s
def choose_word(data):
    """[Choose a random word from DATA array]

    Args:
        data ([function]): [Use read_data func]

    Returns:
        [str]: [Return the random word from DATA array]
    """
    chose_word = data[randint(0, len(data) - 1)]
    chose_word = chose_word[:-1]
    return chose_word
def game_start():
    welcome = "Bienvenido a HANGMAN GAME"

    print("+"*(2 + len(welcome))+
          "\n|"+welcome+"|\n"+
          "+"*(2 + len(welcome)))

    time.sleep(2)
    os.system("clear")
def you_win(palabra):

    win = "Felicidades, GANASTE"
    
    print("\n"+"+"*(2 + len(win))+
          "\n|"+win+"|\n"+
          "+"*(2 + len(win)))

    print("\nLa palabra ganadora era: " + palabra)

    time.sleep(2)
    exit()
def game():
    words = read_data()
    attemp = ''
    chose = choose_word(words)
    corrects = []
    will_win = 0

    no_accent = normalize(chose)

    while(True):
        aux = 0 
        for i in range(len(chose)):
            if no_accent[i] in corrects:
                print(chose[i], end="")
                aux += 1
                if aux == len(no_accent):
                    os.system("clear")
                    you_win(chose)

            else:
                print("_",end="")
        print('\n\n')

        try:

            key = input("Ingresa una letra para comprobar: ")
            os.system("clear")


            if key.isnumeric() or len(key) > 1 or len(key) == 0:
                raise Exception("Debes ingresar SOLO una letra, tampoco debes ingresar números ni espacios vacíos")

            for letter in no_accent:
                if letter == key.lower():
                    if letter in corrects:
                        continue
                    else:
                        corrects.append(key)
        except Exception:
            print("Debes ingresar SOLO una letra, tampoco debes ingresar números")
def run():
    game_start()
    game()
if __name__ == '__main__':
    run()