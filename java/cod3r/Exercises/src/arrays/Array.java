package arrays;

import java.util.Arrays;

public class Array {
    public static void main(String[] args) {

        double[] gradesStudentA = new double[4];
        System.out.println(Arrays.toString(gradesStudentA));

        gradesStudentA[0] = 7.9;
        gradesStudentA[1] = 8;
        gradesStudentA[2] = 6.5;
        gradesStudentA[3] = 9.7;

        System.out.println(Arrays.toString(gradesStudentA));

        double totalStudentA = 0;
        for (int i = 0; i < gradesStudentA.length; i++){
            totalStudentA += gradesStudentA[i];
        }

        System.out.println(totalStudentA / gradesStudentA.length);
        System.out.println(gradesStudentA[0]);
        System.out.println(gradesStudentA.length -1);

        double storedGrade = 5.9;
        final double[] gradesStudentB = { 6.8, 8.9, 9.2, 10, 6.0, storedGrade };

        double totalStudentB = 0;
        for (int i = 0; i < gradesStudentB.length; i++) {
            totalStudentB += gradesStudentB[i];
        }

        System.out.println(totalStudentB / gradesStudentB.length);
    }
}
