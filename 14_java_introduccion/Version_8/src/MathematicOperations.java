public class MathematicOperations {
    public static void main(String[] args) {
        double x = 2.1;
        double y = 3;

        //ceil para arriba, floor para abajo
        System.out.println(Math.floor(x));

        //elevado a otro
        System.out.println(Math.pow(x,y));

        //El numero mayor
        System.out.println(Math.max(x,y));

        //raiz cuadrada
        System.out.println(Math.sqrt(y));

        //Area de un circulo
        System.out.println(Math.PI * Math.pow(y,2));
    }
}
