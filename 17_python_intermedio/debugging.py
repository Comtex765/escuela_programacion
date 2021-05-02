def divisor(num):
    try:
        if num < 2:
            raise Exception("El número debe ser mayor a 1") 
        divisors = [i for i in range(1, num + 1) if num % i==0 ]
        return divisors
    except Exception:
        print("El número debe ser mayor a 1")
        exit()

def run():
    try:
        num = int(input("Ingresa un número: "))
        print(divisor(num))
        print("Terminó el programa")

    except ValueError:
        print("Debes ingresar un número, no letras")

if __name__ == '__main__':
    run()