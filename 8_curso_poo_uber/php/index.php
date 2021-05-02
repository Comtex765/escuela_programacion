<<<<<<< HEAD
<?php
require_once('car.php');
require_once('uberX.php');
require_once('uberPool.php');
require_once('account.php');

$uberX = new uberX('HBA 624', new account('Andres Herrera', 'AND456'), 'Chevrolet', 'Spark');
$uberX->printDataCar();

$uberPool = new $uberPool('HBQ 424', new account('Ares Herrera', 'AN5456'), 'Chelet', 'Spk');
$uberPool->printDataCar();
=======
<?php
require_once('car.php');
require_once('uberX.php');
require_once('uberPool.php');
require_once('account.php');

$uberX = new uberX('HBA 624', new account('Andres Herrera', 'AND456'), 'Chevrolet', 'Spark');
$uberX->printDataCar();

$uberPool = new $uberPool('HBQ 424', new account('Ares Herrera', 'AN5456'), 'Chelet', 'Spk');
$uberPool->printDataCar();
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
?>