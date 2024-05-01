package exception.personalizedA;

public class NumberOutRangeException extends RuntimeException {

    private String attributeName;
    public NumberOutRangeException(String attributeName){
        this.attributeName = attributeName;
    }

    public String getMessage() {
        return String.format("The Attribute '%s' is out of range", attributeName);
    }
}
