package constructors.exercises.application;

import constructors.exercises.entities.BankAccount;

import java.util.Scanner;

public class BankAccountTest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        BankAccount account;

        System.out.println("Enter account number: ");
        int number = scanner.nextInt();
        System.out.println("Enter account holder: ");
        scanner.nextLine();
        String holder = scanner.nextLine();
        System.out.println("Is there an initial deposit (y/n):? ");
        char response = scanner.next().charAt(0);

        if (response == 'y') {
            System.out.println("Enter initial deposit value: ");
            double initialDeposit = scanner.nextDouble();
            account = new BankAccount(number, holder, initialDeposit);
        } else {
            account = new BankAccount(number, holder);
        }

        System.out.println();
        System.out.println("Account data: ");
        System.out.println(account);

        System.out.println();
        System.out.print("Enter a deposit value: ");
        double depositValue = scanner.nextDouble();
        account.deposit(depositValue);
        System.out.println("Updated account data: ");
        System.out.println(account);

        System.out.println();
        System.out.print("Enter a withdraw value: ");
        double withdrawValue = scanner.nextDouble();
        account.withdraw(withdrawValue);
        System.out.println("Updated account data: ");
        System.out.println(account);

        scanner.close();
    }
}
