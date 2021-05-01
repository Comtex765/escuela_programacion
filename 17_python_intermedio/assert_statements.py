def divisor(num):
    divisors = [i for i in range(1, num + 1) if num % i==0 ]
    return divisors

def run():
    num = input("Ingresa un número: ")
    assert num.isnumeric() and int(num) > 1, "Debes ingresar un número, no letras ni números menores a 1"
    print(divisor(int(num)))
    print("Terminó el programa")

if __name__ == '__main__':
    run()