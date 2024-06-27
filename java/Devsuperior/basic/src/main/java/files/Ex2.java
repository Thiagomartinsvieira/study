package files;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class Ex2 {
    public static void main(String[] args) {
        String[] lines = new String[] {"Good morning", "Good Afternoon", "Good Night"};

        String path = "/home/thiago/Downloads/file.txt";

        try (BufferedWriter bw = new BufferedWriter(new FileWriter(path, true))) {
            for (String line : lines) {
                bw.write(line);
                bw.newLine();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
