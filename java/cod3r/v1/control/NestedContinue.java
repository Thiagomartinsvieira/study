package control;

public class NestedContinue {
    public static void main(String[] args) {
        external: for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                if (j == 2){
                    continue external;
                }

                System.out.println(i + " " + j);
            }
        }

        System.out.println("Finish!");
    }
}
