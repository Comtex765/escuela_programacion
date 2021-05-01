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
echo $user->type->greet();