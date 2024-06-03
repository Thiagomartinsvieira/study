package collections;

import java.util.Objects;

public class Address {

    String place;
    int number;
    String complement;

    public Address(String place, int number, String complement) {
        this.place = place;
        this.number = number;
        this.complement = complement;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Address address = (Address) o;
        return number == address.number && Objects.equals(place, address.place) && Objects.equals(complement, address.complement);
    }

    @Override
    public int hashCode() {
        return Objects.hash(place, number, complement);
    }
}
