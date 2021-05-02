<<<<<<< HEAD
from car import Car

class uberPool(Car):
    brand = str
    model = str

    def __init__(self, license, driver, brand, model):
        super().__init__(license, driver)
        self.brand = brand
=======
from car import Car

class uberPool(Car):
    brand = str
    model = str

    def __init__(self, license, driver, brand, model):
        super().__init__(license, driver)
        self.brand = brand
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
        self.model = model