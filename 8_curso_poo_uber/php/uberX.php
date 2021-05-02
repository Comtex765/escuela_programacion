<<<<<<< HEAD
<?php
require_once('car.php')
class uberX extends Car{
    public $brand;
    public $model;

    public function __construct($license, $driver, $brand, $model){
        parent::__construct($license, $driver)
        $this->brand = $brand;
        $this->model = $model;
    }
}
=======
<?php
require_once('car.php')
class uberX extends Car{
    public $brand;
    public $model;

    public function __construct($license, $driver, $brand, $model){
        parent::__construct($license, $driver)
        $this->brand = $brand;
        $this->model = $model;
    }
}
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
?>