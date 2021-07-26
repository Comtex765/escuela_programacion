from random import randint
from time import sleep

def chooseAsk():
    with open("./archivos/lista.txt", "r", encoding="utf-8") as f:

        data = [line for line in f]

        with open("./archivos/chose.txt", "a", encoding="utf-8") as g:

            with open("./archivos/chose.txt", "r", encoding="utf-8") as h:

                num = randint(0,402)
                numP = str(num) + "\n"

                while True:
                    numsList = [line for line in h]


                    if (len(numsList)) + 1 == len(data):
                        theEnd()

                    if numP in numsList:
                        while numP in numsList:
                            num = randint(0,402)
                            numP = str(num) + "\n"
                    else:
                        g.write(str(num))
                        g.write("\n")
                        break

                    large = (len(numsList)) + 1
                    print(f"# preguntas hechas = {large}")

    return data[num]

def showAsk(ask):
    with open("./archivos/pooh.txt","r",encoding="utf-8") as i:
        for line in i:
            print(line,end="")

    print("\033[1;33m"+"\n",ask,end="")

def theEnd():
    print(" +------------------+\n",
          "|PREGUNTAS ACABADAS|\n",
          "+------------------+")

    with open("./archivos/end.txt","r",encoding="utf-8") as i:
        for line in i:
            print(line,end="")
    exit()


def run():
    ask = chooseAsk()

    showAsk(ask)

if __name__ == '__main__':
    run()