import numpy as np
import matplotlib.pyplot as plt

def estimate_b0_b1(x, y):
    n = np.size(x)

    #Se obtienen los promedios de X y de Y
    mX, mY = np.mean(x), np.mean(y)

    #Calcular sumatoria de XY y de XX
    Sumatoria_xy = np.sum((x-mX)*(y-mY))
    Sumatoria_xx = np.sum(x*(x-mX))

    #Coeficientes de regresión
    b_1 = Sumatoria_xy / Sumatoria_xx
    b_0 = mY - b_1*mX

    return(b_0, b_1)

#Funcion de graficado
def plot_regression(x,y,b):
    plt.scatter(x, y, color = "r", marker = "o", s=30)

    y_pred = b[0] + b[1]*x

    plt.plot(x, y_pred, color = "b")

    #Etiquetado
    plt.xlabel('x-Independiente')
    plt.ylabel('y-Dependiente')

    plt.savefig('diagrama-dispersion.png')
    
    plt.show()

#Codigo MAIN
def main():
    #DATASET
    x = np.array([1,2,3,4,5,4,9,6,6,4,12])
    y = np.array([2,3,5,6,5,7,8,9,10,11,12])

    #Obtenemos b1 y b2
    b = estimate_b0_b1(x, y)

    print(f'Los valores de b0 = {b[0]} y b1 = {b[1]}')

    #Graficamos nuestra línea de regresión
    plot_regression(x, y, b)

if __name__ == '__main__':
    main()