package control;

public class NestedBreak {
    public static void main(String[] args) {
        external: for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                if (j == 2){
                    break external;
                }

                System.out.println(i + " " + j);
            }
        }
        System.out.println("Finish!");
    }
}
