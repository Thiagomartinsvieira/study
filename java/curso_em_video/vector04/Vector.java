package vector04;

import java.util.Arrays;

public class Vector {
    public static void main(String[] args) {
        int vet[] = {3, 7, 6, 1, 9, 4, 2};
        for (int v:vet){
            System.out.print(v + " ");
        }
        System.out.println("");
        int p = Arrays.binarySearch(vet, 8);
        System.out.println("Find the value in position "  + p);
    }
}
