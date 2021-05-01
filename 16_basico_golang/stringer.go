package main

import "fmt"

type pc struct {
	ram   int
	disk  int
	brand string
}

func (myPC pc) String() string {
	return fmt.Sprintf("Tengo %d GB de RAM, %d GB de disco y es marca %s", myPC.ram, myPC.disk, myPC.brand)
}

func main() {

	myPC := pc{ram: 16, disk: 512, brand: "msi"}

	fmt.Println(myPC)

	myOter := pc{ram: 45, disk: 48, brand: "omen"}
	fmt.Println(myOter)
}
