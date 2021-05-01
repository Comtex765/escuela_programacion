class Main{
    public static void main(String[] args){
        UberX uberx = new UberX("AMQ 123",new Account("Andres Herrera ", "AND123"), "Chevrolet", "Sonic");
        uberx.setPassenger(4);
        uberx.printDataCar();

        

        /*Car car2 = new Car("A45 j23",new Account("Carolina Herrera", "AN4W13"));
        car2.passenger = 2;
        car2.printDataCar();*/
        
    }
}