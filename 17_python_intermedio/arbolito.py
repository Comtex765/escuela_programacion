
def run():
    num = int(input("Ingresa el número de filas para el árbol: "))
    a = "*"
    max = 2*num - 1
    for i in range(1, num + 1):

        print(int((max - (2*(i) - 1))/2) * " ", end="")

        print((2*(i-1) + 1)*a)

if __name__ == '__main__':
    run()


