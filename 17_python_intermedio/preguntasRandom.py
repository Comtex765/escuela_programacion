import time
def openFile():

    with open("./archivos/preguntas.txt", "r", encoding="utf-8") as f:
        data = [line for line in f]
    return data

def lineEnd(data):

    nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    i = 0

    for string in data[4]: 
        i = i + 1
        if string == ".":
            a = i - 4
            b = i - 1
            print(data[4][a:i].lstrip(),end="")
           
        elif string == ":":
            print(":")
        else:
            if not string in nums: 
                print(string, end="")




def run():
    time.sleep(0.5)
    asks = openFile()
    lineEnd(asks)

if __name__ == '__main__':
    run()
