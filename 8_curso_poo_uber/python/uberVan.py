<<<<<<< HEAD
from car import Car

class uberVan(Car):
    typeCarAccepted = []
    seatsMaterial = []

    def __init__(self, license, driver, typeCarAccepted, seatsMaterial):
        super().__init__(license, driver)
        self.typeCarAccepted = typeCarAccepted
=======
from car import Car

class uberVan(Car):
    typeCarAccepted = []
    seatsMaterial = []

    def __init__(self, license, driver, typeCarAccepted, seatsMaterial):
        super().__init__(license, driver)
        self.typeCarAccepted = typeCarAccepted
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
        self.seatsMaterial = seatsMaterial