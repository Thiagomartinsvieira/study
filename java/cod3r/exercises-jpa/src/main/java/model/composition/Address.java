package model.composition;

import javax.persistence.Embeddable;
@Embeddable
public class Address {

    private String place;
    private String complement;

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getComplement() {
        return complement;
    }

    public void setComplement(String complement) {
        this.complement = complement;
    }
}
