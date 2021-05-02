from car import Car
from account import Account
from driver import Driver
from user import User

if __name__ == '__main__':
    car = Car("Adf 123", User('Fernando', '45sde'))
    print(vars(car))

    car2 = Car('GER345', Driver('Alejandro', '4512S'))
    print(vars(car2))