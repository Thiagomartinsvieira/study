package collections;

public class AddressTest {
    public static void main(String[] args) {
        Address address1 = new Address("Stree 1", 1, "Room 1");
        Address address2 = new Address("Stree 1", 1, "Room 1");

        System.out.println(address1 == address2);
        System.out.println(address1.equals(address2));
    }
}
