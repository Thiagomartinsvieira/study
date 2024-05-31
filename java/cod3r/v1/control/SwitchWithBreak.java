package control;

public class SwitchWithBreak {
    public static void main(String[] args) {
        String concept = "";
        int grade = 10;

        switch (grade){
            case 10: case 9:
                concept = "A";
                break;
            case 8: case 7:
                concept = "B";
                break;
            case 6: case 5:
                concept = "C";
                break;
            case 4: case 3:
                concept = "D";
                break;
            case 2: case 1: case 0:
                concept = "E";
                break;
            default:
                concept = "Uniformed!";
                break;
        }

        if (concept != null){
            System.out.println("Concept " + concept);
        } else {
            System.out.println("Invalid grade.1");
        }
    }
}
