<<<<<<< HEAD
public class Functions {
    public static void main(String[] args) {
        //double y = 3;
        //double area = circleArea(y);
        //System.out.println("El área de un círculo con radio "+ y + " es " + area);

        System.out.println("PESOS A DOLARES: " + convertToDolar(1000, "COP"));
    }

    public static double circleArea(double r){
        return Math.PI * Math.pow(r, 2);
    }

    public static double sphereArea(double r){
        return 4 * Math.PI * Math.pow(r, 2);
    }

    public static double sphereVolume(double r){
        return (4/3) * Math.PI * Math.pow(r, 3);
    }


    /**
     * Description: Función que especificando su monea convierte una cantidad de dinero a dólares
     * @param quantity Cantidad de dinero que se va a transformar
     * @param currency Tipo de moneda a la que se convertirá MXN o COP
     * @return quantity Devuelve la cantidad transformada a dólares
     */
    public static double convertToDolar(double quantity, String currency){
        //MXN or COP
        switch (currency){
            case "MXN":
                quantity = quantity * 0.052;
                break;
            case "COP":
                quantity = quantity * 0.00031;
                break;
        }
        return  quantity;
    }
}
=======
public class Functions {
    public static void main(String[] args) {
        //double y = 3;
        //double area = circleArea(y);
        //System.out.println("El área de un círculo con radio "+ y + " es " + area);

        System.out.println("PESOS A DOLARES: " + convertToDolar(1000, "COP"));
    }

    public static double circleArea(double r){
        return Math.PI * Math.pow(r, 2);
    }

    public static double sphereArea(double r){
        return 4 * Math.PI * Math.pow(r, 2);
    }

    public static double sphereVolume(double r){
        return (4/3) * Math.PI * Math.pow(r, 3);
    }


    /**
     * Description: Función que especificando su monea convierte una cantidad de dinero a dólares
     * @param quantity Cantidad de dinero que se va a transformar
     * @param currency Tipo de moneda a la que se convertirá MXN o COP
     * @return quantity Devuelve la cantidad transformada a dólares
     */
    public static double convertToDolar(double quantity, String currency){
        //MXN or COP
        switch (currency){
            case "MXN":
                quantity = quantity * 0.052;
                break;
            case "COP":
                quantity = quantity * 0.00031;
                break;
        }
        return  quantity;
    }
}
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
