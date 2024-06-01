package collections;

public class Array {
    public static void main(String[] args) {
        double[] gradesJoao = {7.0, 7.5, 6.2, 4.9, 6.7};

        double[] gradesPedro = new double[5];
        gradesPedro[0] = 7.0;
        gradesPedro[1] = 5.0;
        gradesPedro[2] = 8.0;
        gradesPedro[3] = 9.0;
        gradesPedro[4] = 10;

        double totalJoao = 0;
        for (double grade: gradesJoao){
            totalJoao += grade;
        }
//        for (int i = 0; i < gradesJoao.length; i++) {
//            totalJoao += gradesJoao[i];
//        }

        double totalPedro = 0;
//        for (int i = 0; i < gradesPedro.length; i++) {
//            totalPedro += gradesPedro[i];
//        }

        System.out.println(totalJoao / gradesJoao.length);
        System.out.println(totalPedro / gradesPedro.length);
    }
}
