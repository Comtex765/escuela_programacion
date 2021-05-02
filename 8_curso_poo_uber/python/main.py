<<<<<<< HEAD
from car import Car
from account import Account
from driver import Driver
from user import User

if __name__ == '__main__':
    car = Car("Adf 123", User('Fernando', '45sde'))
    print(vars(car))

    car2 = Car('GER345', Driver('Alejandro', '4512S'))
=======
from car import Car
from account import Account
from driver import Driver
from user import User

if __name__ == '__main__':
    car = Car("Adf 123", User('Fernando', '45sde'))
    print(vars(car))

    car2 = Car('GER345', Driver('Alejandro', '4512S'))
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
    print(vars(car2))