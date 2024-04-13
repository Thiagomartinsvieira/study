package exercises.function01;

public class Function01 {
    public static void main(String[] args) {
        Factorial f  = new Factorial();
        f.setValue(5);
        System.out.println(f.getFormula());
        System.out.print(f.getFatorial());
    }
}
