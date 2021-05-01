public class Arrays {
    public static void main(String[] args) {
        String[] androidVersions = new String[17];
        String days[] = new String[7];

        String[][] cities = new String[4][2];

        int [][][] numbers = new int[2][2][2];
        String [][][][] animals = new String[2][3][2][2];

        androidVersions[0] = "Apple Pie";
        androidVersions[1] = "Banana Bread";
        androidVersions[2] = "Cupcake";
        androidVersions[3] = "Donut";

        for (int i = 0; i < androidVersions.length; i++) {
            if (androidVersions[i] == null){
                break;
            }
            System.out.println(androidVersions[i]);
        }

        System.out.println();
        System.out.println();

        cities[0][0] = "Colombia";
        cities[0][1] = "Medellín";
        cities[1][0] = "Colombia";
        cities[1][1] = "Bogotá";
        cities[2][0] = "New Zealand";
        cities[2][1] = "Auckland";
        cities[3][0] = "Australia";
        cities[3][1] = "Sidney";


        for (int i = 0; i < cities.length; i++) {
            for (int j = 0; j < cities[i].length; j++) {
                System.out.println(cities[i][j]);
            }
        }

        System.out.println();
        System.out.println();

        animals[1][0][0][1] = "Monkey";
        System.out.println(animals[1][0][0][1]);
    }
}
