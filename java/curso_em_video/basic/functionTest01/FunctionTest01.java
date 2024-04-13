package functionTest01;

public class FunctionTest01 {

    static int sum(int a, int b){
        int s = a + b;
        return s;
    }
    public static void main(String[] args) {
        System.out.println("Starting the program!");
        int sm = sum(5,2);
        System.out.println("The value of the sum is " + sm);
    }
}
