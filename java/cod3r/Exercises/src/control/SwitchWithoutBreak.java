package control;
public class SwitchWithoutBreak {
    public static void main(String[] args) {

        String belt = "brown";

        switch (belt.toLowerCase()){
            case "black":
                System.out.println("Sei o Bassau-Dai...");
            case "brown":
                System.out.println("Sei o Tekki Shodan");
            case "purple":
                System.out.println("Sei o Heian Godan");
            case "green":
                System.out.println("Sei Heian Yodan");
            case "orange":
                System.out.println("Sei Heian Sadan");
            case "red":
                System.out.println("Sei o Heian Nidan");
            case "yellow":
                System.out.println("Sei o Heian Shodan");
                break;
            default:
                System.out.println("I Know nothing");
        }
        System.out.println("Finish!");

        int age = 4;

        switch (age){
            case 4:
                System.out.println("Knows how to program");
            case 3:
                System.out.println("Knows how to speak");
            case 2:
                System.out.println("Knows how to walk");
            case 1:
                System.out.println("Know how to breathe");
        }

    }
}
