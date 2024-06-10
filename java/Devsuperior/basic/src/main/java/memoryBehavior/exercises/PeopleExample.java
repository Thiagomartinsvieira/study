package memoryBehavior.exercises;

import java.util.Scanner;

public class PeopleExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("How many people will be entered? ");
        int n = scanner.nextInt();

        String[] names = new String[n];
        int[] ages = new int[n];
        double[] heights = new double[n];

        for (int i = 0; i < n; i++) {
            System.out.println((i+1) + "st person data: ");
            System.out.println("Name: ");
            names[i] = scanner.next();
            System.out.println("Age: ");
            ages[i] = scanner.nextInt();
            System.out.println("Height: ");
            heights[i] = scanner.nextDouble();
        }

        double sum = 0.0;
        for (int i = 0; i < n; i++) {
            sum = sum + heights[i];
        }
        double mediaHeights = sum / n;

        System.out.println();
        System.out.printf("Average height: %.2f%n", mediaHeights);

        int count = 0;

        for (int i = 0; i < n; i++) {
            if (ages[i] < 16){
                count = count + 1;
            }
        }

        double percent = count * 100.0 / n;

        System.out.printf("People under 16: %.1f%%%n", percent);

        for (int i = 0; i < n; i++) {
            if (ages[i] < 16 ){
                System.out.println(names[i]);
            }
        }

        scanner.close();
    }
}
