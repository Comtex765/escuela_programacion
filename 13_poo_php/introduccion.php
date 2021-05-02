<<<<<<< HEAD
<?php

class User{
    public $type;
}

class Admin{
    public function greet(){
        return "Hola Administrador"
    }
}

$user = new User;
$user->type = new Admin;
=======
<?php

class User{
    public $type;
}

class Admin{
    public function greet(){
        return "Hola Administrador"
    }
}

$user = new User;
$user->type = new Admin;
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
echo $user->type->greet();