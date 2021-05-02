<<<<<<< HEAD
import java.util.ArrayList;
import java.util.Map;

class UberVan  extends Car{
    Map<String, Map<String, Integer>> typeCarAccepted;
    ArrayList<String> seatsMaterial;

    public UberVan(String license, Account driver,Map<String, 
    Map<String, Integer>> typeCarAccepted,
    ArrayList<String> seatsMaterial){

        super(license, driver);
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;

    }
    @Override
    public void setPassenger(Integer passenger) {
        if(passenger == 6){
            this.passenger = passenger;
        }else{
            System.out.println("Necesitas asignar 4 pasajeros");
        }
    }
    @Override
    void printDataCar() {
        super.printDataCar();
    }
=======
import java.util.ArrayList;
import java.util.Map;

class UberVan  extends Car{
    Map<String, Map<String, Integer>> typeCarAccepted;
    ArrayList<String> seatsMaterial;

    public UberVan(String license, Account driver,Map<String, 
    Map<String, Integer>> typeCarAccepted,
    ArrayList<String> seatsMaterial){

        super(license, driver);
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;

    }
    @Override
    public void setPassenger(Integer passenger) {
        if(passenger == 6){
            this.passenger = passenger;
        }else{
            System.out.println("Necesitas asignar 4 pasajeros");
        }
    }
    @Override
    void printDataCar() {
        super.printDataCar();
    }
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
}