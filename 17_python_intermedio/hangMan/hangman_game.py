from random import randint
import os
import time


def draw_man(lifes):
    if lifes == 6:
        print(" ######### \n",
              "# o     o #\n",
              "#   /|    #\n",
              "#  wwww   #\n",
              " ######### \n")
    elif lifes == 5:
        print(" ######### \n",
              "# o     o #\n",
              "#   /|    #\n",
              "#  wwww   #\n",
              " ######### \n",
              "    ||     \n",
              "    ||     \n",
              "    ||     \n",
              "    ||     \n",
              "    ||     \n",
              "    ||     \n",
              "    ||     \n",
              "    ||     \n")
    elif lifes == 4:
        print(" ######### \n",
              "# o     o #\n",
              "#   /|    #\n",
              "#  wwww   #\n",
              " ######### \n",
              "    ||     \n",
              "    ||     \n",
              "    ||     \n",
              "    ||     \n",
              "    ||     \n",
              "    ||     \n",
              "    ||     \n",
              "    ||     \n",
              "   /  \    \n",
              "  /    \   \n",
              " /      \  \n")
    elif lifes == 3:
        print(" #########               \n",
              "# o     o #              \n",
              "#   /|    #              \n",
              "#  wwww   #              \n",
              " #########               \n",
              "    ||                   \n",
              "__  ||  __               \n",
              "  \ || /  +----+         \n",
              "   \||/   |HELP|         \n",
              "    ||    +----+         \n",
              "    ||                   \n",
              "    ||                   \n",
              "    ||                   \n",
              "   /  \                  \n",
              "  /    \                 \n",
              " /      \                \n")
    elif lifes == 2:
        print(" #########           |||           \n",
              "# o     o #         |||            \n",
              "#   /|    #         |||            \n",
              "#  wwww   #         |||            \n",
              " #########          |||            \n",
              "    ||              |||            \n",
              "__  ||  __          |||            \n",
              "  \ || /  +----+    |||            \n",
              "   \||/   |HELP|    |||            \n",
              "    ||    +----+    |||            \n",
              "    ||              |||            \n",
              "    ||              |||            \n",
              "    ||              |||            \n",
              "   /  \             |||            \n",
              "  /    \            |||            \n",
              " /      \           |||            \n")
    elif lifes == 1:
        print("   #########           |||           \n",
              "==# o     o #=========|||            \n",
              "  #   /|    #         |||            \n",
              "  #  wwww   #         |||            \n",
              "   #########          |||            \n",
              "      ||              |||            \n",
              "  __  ||  __          |||            \n",
              "    \ || /  +----+    |||            \n",
              "     \||/   |HELP|    |||            \n",
              "      ||    +----+    |||            \n",
              "      ||              |||            \n",
              "      ||              |||            \n",
              "      ||              |||            \n",
              "     /  \             |||            \n",
              "    /    \            |||            \n",
              "   /      \           |||            \n")


def read_data(opt):
    """[Read data's file]

    Returns:
        [array]: [return an array from data.txt]
    """
    if opt == 1:
        with open("./archivos/ENG.txt", "r", encoding="utf-8") as f:
            data = [line for line in f]
    elif opt == 2:
        with open("./archivos/ESP.txt", "r", encoding="utf-8") as f:
            data = [line for line in f]
    else:
        print("ERROR")
        exit()
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
    os.system("clear")

    welcome = "HANGMAN GAME"

    print("+"*(2 + len(welcome)) +
          "\n|"+welcome+"|\n" +
          "+"*(2 + len(welcome)))

    time.sleep(2)
    os.system("clear")


def you_win(opt, chose):
    os.system("clear")

    if opt == 1:
        print(" #########               \n",
          "# o     o #              \n",
          "#   /|    #              \n",
          "# \____/  #              \n",
          " #########               \n",
          "    ||                   \n",
          "__  ||  __               \n",
          "  \ || /  +------+       \n",
          "   \||/   |Thanks|       \n",
          "    ||    +------+       \n",
          "    ||                   \n",
          "    ||                   \n",
          "    ||                   \n",
          "   /  \                  \n",
          "  /    \                 \n",
          " /      \                \n")

        win = "Congratulations, YOU WIN"

        print("\n"+"+"*(2 + len(win)) +
            "\n|"+win+"|\n" +
            "+"*(2 + len(win)))

        print(f"\nYou got it with: {chose}")

    elif opt == 2:
        print(" #########               \n",
          "# o     o #              \n",
          "#   /|    #              \n",
          "# \____/  #              \n",
          " #########               \n",
          "    ||                   \n",
          "__  ||  __               \n",
          "  \ || /  +-------+       \n",
          "   \||/   |Gracias|       \n",
          "    ||    +-------+       \n",
          "    ||                   \n",
          "    ||                   \n",
          "    ||                   \n",
          "   /  \                  \n",
          "  /    \                 \n",
          " /      \                \n")

        win = "Felicidades, GANASTE!"

        print("\n"+"+"*(2 + len(win)) +
            "\n|"+win+"|\n" +
            "+"*(2 + len(win)))

        print(f"\nAcertaste con: {chose}")

    time.sleep(1)
    exit()


def game_over(word_chose, opt):
    if opt == 1:
        print("   #########           |||           \n",
          "==# x     x #=========|||            \n",
          "  #   /|    #         |||            \n",
          "  #  ----   #         |||            \n",
          "   #########          |||            \n",
          "      ||              |||            \n",
          "      ||              |||            \n",
          "      ||              |||            \n",
          "      ||              |||            \n",
          "     /||\             |||            \n",
          "    / || \            |||            \n",
          "      ||              |||            \n",
          "      ||              |||            \n",
          "     /  \    +----+   |||            \n",
          "    /    \   |HELP|   |||            \n",
          "   /      \  +----+   |||            \n\n")

        win = ":( You lost ):"

        print("+"*(2 + len(win)) +
            "\n|"+win+"|\n" +
            "+"*(2 + len(win)))

        print("\n")
        print("The word was: ", word_chose)

    elif opt == 2:
        print("   #########           |||           \n",
          "==# x     x #=========|||            \n",
          "  #   /|    #         |||            \n",
          "  #  ----   #         |||            \n",
          "   #########          |||            \n",
          "      ||              |||            \n",
          "      ||              |||            \n",
          "      ||              |||            \n",
          "      ||              |||            \n",
          "     /||\             |||            \n",
          "    / || \            |||            \n",
          "      ||              |||            \n",
          "      ||              |||            \n",
          "     /  \    +----+   |||            \n",
          "    /    \   |HELP|   |||            \n",
          "   /      \  +----+   |||            \n\n")

        win = ":( PERDISTE ):"

        print("+"*(2 + len(win)) +
            "\n|"+win+"|\n" +
            "+"*(2 + len(win)))

        print("\n")
        print("La palabra era: ", word_chose)
    
    

    time.sleep(2)
    exit()


def game():
    print("Choose your language: \n",
                    "[1] English \n",
                    "[2] Español \n")
    opt = int(input("-----> "))

    os.system("clear")

    words = read_data(opt)
    chose = choose_word(words)
    no_accent = normalize(chose)
    corrects = []
    lifes = 7

    while(True):
        confirms = 0
        aux = 0

        draw_man(lifes)

        for i in range(len(chose)):

            if no_accent[i] in corrects:
                print(chose[i], end="")
                aux += 1

                if aux == len(no_accent):
                    os.system("clear")
                    print("\n")
                    you_win(opt, chose)
            else:
                print("_", end="")

        print('\n\n')

        try:
            if opt == 1:
                key = input("Tell me a letter: ")
            elif opt == 2:
                key = input("Dime una letra: ")
    
            os.system("clear")

            if key.isnumeric() or len(key) > 1 or len(key) == 0:
                raise Exception(
                    "Debes ingresar SOLO una letra, tampoco debes ingresar números ni espacios vacíos")

            for letter in no_accent:
                if letter == key.lower():
                    if letter in corrects:
                        continue
                    else:
                        corrects.append(key)

            for i in range(len(no_accent)):
                if key.lower() != no_accent[i]:
                    confirms += 1
                    if confirms == len(no_accent):
                        lifes -= 1
                        if lifes == 0:
                            game_over(chose, opt)

        except Exception:
            print("Debes ingresar SOLO una letra, tampoco debes ingresar números")


def run():
    game_start()
    game()


if __name__ == '__main__':
    run()