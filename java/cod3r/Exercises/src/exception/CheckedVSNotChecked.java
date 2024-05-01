package exception;

public class CheckedVSNotChecked {
    public static void main(String[] args) {

            generateError1();

        try {
            generateError2();
        } catch (Throwable e) {
            System.out.println(e.getMessage());
        }

        System.out.println("Finish");
    }

    // Not checked or not verified
    static void generateError1() throws RuntimeException{
        throw new RuntimeException("An error Occurred #01");
    }

    // Checked Exception or verified
    static void generateError2() throws Exception{
        throw new Exception("An error Occurred #02");
    }
}
