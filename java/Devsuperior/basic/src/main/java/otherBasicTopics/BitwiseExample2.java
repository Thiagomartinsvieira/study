package otherBasicTopics;

import java.util.Scanner;

public class BitwiseExample2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int mask = 0b100000;
        int n = scanner.nextInt();

        if ((n & mask) !=0) {
            System.out.println("6th bit is true!");
        } else {
            System.out.println("6th bit is false!");
        }
    }
}
