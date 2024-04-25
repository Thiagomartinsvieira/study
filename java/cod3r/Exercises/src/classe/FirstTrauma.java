package Classe;

public class FirstTrauma {
    int a = 3; // You can't move here
    static int b = 4;
    public static void main(String[] args) {

        FirstTrauma instance = new FirstTrauma();
        System.out.println(instance.a);

        System.out.println(b);
    }
}
