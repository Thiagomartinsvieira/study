package exception.personalizedB;

public class NumberOutRangeException extends Exception {

    private String attributeName;
    public NumberOutRangeException(String attributeName){
        this.attributeName = attributeName;
    }

    public String getMessage() {
        return String.format("The Attribute '%s' is out of range", attributeName);
    }
}
