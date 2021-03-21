public class updatingVariables {
    public static void main(String[] args) {
        int salary = 1000;

        //bono de 200
        salary = salary + 200;
        System.out.println(salary);

        //pension de 50
        salary = salary - 50;
        System.out.println(salary);

        //2 horas extra 30 c/u
        //comida 45

        salary = salary + (2*30) - 45;
        System.out.println("Tu salario es: " + salary);

        //actualizando cadenas de texto
        String employeeName = "Fernando Novillo";
        employeeName = employeeName + " Aguirre";
        System.out.println(employeeName);



    }
}
