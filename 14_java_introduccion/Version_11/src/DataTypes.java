public class DataTypes {
    public static void main(String[] args) {

        int n = 1234567890;
        long nL = 12345678910L;

        double nD = 12.54894;
        float nF = 123.45645F;

        //char es con con ' ' y String con " "


        var salary = 1000;
        //la pension es 3%
        var pension = salary * 0.03;
        var totalSalary= salary - pension;
        System.out.println("Tu salario es: " + salary);
        System.out.println("Tu pension que debes pagar es de: " + pension);
        System.out.println("Tu salario total es de: " + totalSalary);


    }
}