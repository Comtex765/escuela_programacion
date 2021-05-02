<<<<<<< HEAD
import java.util.ArrayList;
import java.util.Map;

class UberBlack  extends Car{
    Map<String, Map<String, Integer>> typeCarAccepted;
    ArrayList<String> seatsMaterial;

    public UberBlack(String license, Account driver,Map<String, 
    Map<String, Integer>> typeCarAccepted,
    ArrayList<String> seatsMaterial){

        super(license, driver);
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;

    }
=======
import java.util.ArrayList;
import java.util.Map;

class UberBlack  extends Car{
    Map<String, Map<String, Integer>> typeCarAccepted;
    ArrayList<String> seatsMaterial;

    public UberBlack(String license, Account driver,Map<String, 
    Map<String, Integer>> typeCarAccepted,
    ArrayList<String> seatsMaterial){

        super(license, driver);
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;

    }
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
}