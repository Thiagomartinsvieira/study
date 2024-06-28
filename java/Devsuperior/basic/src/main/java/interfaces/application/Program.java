package interfaces.application;

import interfaces.model.entities.CarRental;
import interfaces.model.entities.Vehicle;
import interfaces.model.service.BrazilTaxService;
import interfaces.model.service.RentalService;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");

        System.out.println("Enter rental details");
        System.out.print("Car model: ");
        String carModel = sc.nextLine();
        System.out.println("Withdrawal (dd/MM/yyyy hh:mm):");
        LocalDateTime start = LocalDateTime.parse(sc.nextLine(), fmt);
        System.out.println("Return (dd/MM/yyyy hh:mm):");
        LocalDateTime finish = LocalDateTime.parse(sc.nextLine(), fmt);

        CarRental cr = new CarRental(start, finish, new Vehicle(carModel));

        System.out.print("Enter the price per hour: ");
        double pricePerHour = sc.nextDouble();
        System.out.print("Enter the price per day: ");
        double pricePerDay = sc.nextDouble();

        RentalService rentalService = new RentalService(pricePerHour, pricePerDay, new BrazilTaxService());

        rentalService.processInvoice(cr);

        System.out.println("Invoice: ");
        System.out.println("Basic Payment " + cr.getInvoice().getBasicPayment());
        System.out.println("Tax: " + cr.getInvoice().getTax());
        System.out.println("Total Payment: " + cr.getInvoice().getTotalPayment());

        sc.close();
    }
}
