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
