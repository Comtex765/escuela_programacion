<<<<<<< HEAD
from account import Account
class User(Account):
    def __init__(self, name, document):
        super().__init__(name, document)
        self.name = name
=======
from account import Account
class User(Account):
    def __init__(self, name, document):
        super().__init__(name, document)
        self.name = name
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
        self.document = document