package Fundamentals;

public class primitiveTypes {
    public static void main(String[] args) {
        // Employee info

        byte yearsInTheCompany = 23;
        short numberOfFlights = 327;
        int id = 54904;
        long accumulatedPoints = 3_243_854_231L;

        // Numeric types
        float salary = 11_445.44F;
        double accumulatedSales = 2_991_795_103.01;

        // Boolean type
        boolean isVocation = false; //

        // Caracter type

        char status = 'A'; // Active

        // Company days
        System.out.println(yearsInTheCompany * 365);

        // Number of trips
        System.out.println(numberOfFlights / 2);

        // Points per dollar
        System.out.println(accumulatedPoints / accumulatedSales);

        System.out.println(id + ": Receive -> " + salary);
        System.out.println("Vacation? " + isVocation);
        System.out.println("Status " + status);
    }
}
