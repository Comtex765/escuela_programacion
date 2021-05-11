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

                    if numP in numsList:

                        print("num ",num," en lista")

                        while numP in numsList:
                            print("calculando ",num," en lista")
                            num = randint(0,402)
                            numP = str(num) + "\n"


                    else:
                        g.write(str(num))
                        g.write("\n")
                        break
    return data[num]

def showAsk(ask):
    with open("./archivos/pooh.txt","r",encoding="utf-8") as i:
        for line in i:
            print(line,end="")
    print("\033[1;33m"+"\n",ask,end="")




def run():
    ask = chooseAsk()

    showAsk(ask)

if __name__ == '__main__':
    run()