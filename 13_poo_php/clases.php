<<<<<<< HEAD
<?php

class Person{
    public function greet(){
        return "Hola $this->name";
    }
}

class User{
    public $type;
}

class Admin extends Person{
    public $name = 'Fernando Admin';
}

$user = new User;
$user->type = new Admin;
=======
<?php

class Person{
    public function greet(){
        return "Hola $this->name";
    }
}

class User{
    public $type;
}

class Admin extends Person{
    public $name = 'Fernando Admin';
}

$user = new User;
$user->type = new Admin;
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
echo $user->type->greet();