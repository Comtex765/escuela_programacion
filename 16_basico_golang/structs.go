<<<<<<< HEAD
package main

import "fmt"

type car struct {
	brand string
	year  int
}

func main() {
	myCar := car{brand: "Ford", year: 2020}
	fmt.Println(myCar)

	//como clase vacía
	var otherCar car
	otherCar.brand = "Ferrai"
	fmt.Println(otherCar)
}
=======
package main

import "fmt"

type car struct {
	brand string
	year  int
}

func main() {
	myCar := car{brand: "Ford", year: 2020}
	fmt.Println(myCar)

	//como clase vacía
	var otherCar car
	otherCar.brand = "Ferrai"
	fmt.Println(otherCar)
}
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
