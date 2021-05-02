<<<<<<< HEAD
public class WhileLopp {
    static boolean isTurnOnLight = false;
    public static void main(String[] args) {
        turnOnOffLight();

        int i = 1;
        while (isTurnOnLight && i<=10){
            printSOS();
            i++;
        }
    }
    public static void printSOS(){
        System.out.println("... --- ...");
    }

    public  static boolean turnOnOffLight(){
        isTurnOnLight = (isTurnOnLight)?false:true;
        return isTurnOnLight;
    }
}
=======
public class WhileLopp {
    static boolean isTurnOnLight = false;
    public static void main(String[] args) {
        turnOnOffLight();

        int i = 1;
        while (isTurnOnLight && i<=10){
            printSOS();
            i++;
        }
    }
    public static void printSOS(){
        System.out.println("... --- ...");
    }

    public  static boolean turnOnOffLight(){
        isTurnOnLight = (isTurnOnLight)?false:true;
        return isTurnOnLight;
    }
}
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
