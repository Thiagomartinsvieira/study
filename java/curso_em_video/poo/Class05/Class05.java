package Class05;

public class Class05 {
    public static void main(String[] args) {
        BankAccount p1 = new BankAccount();
        p1.setNumAccount(1111);
        p1.setOwner("Lucas");
        p1.openAccount("CC");
        p1.withdraw(200);
        p1.toWithdraw(250);
        p1.closeAccount();

        BankAccount p2 = new BankAccount();
        p2.setNumAccount(2222);
        p2.setOwner("Camila");
        p2.openAccount("CP");
        p2.withdraw(350);
        p2.toWithdraw(200);

        p1.actualState();
        p2.actualState();
    }
}
