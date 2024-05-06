package Generics;

import java.util.Arrays;
import java.util.List;

public class UtilListTest {
    public static void main(String[] args) {
        List<String> langs = Arrays.asList("JS", "PHP", "JAVA", "GO");
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6);

        String lastLanguage1 = (String) UtilList.getLast1(langs);
        System.out.println(lastLanguage1);

        Integer lastNumber1 = (Integer) UtilList.getLast1(nums);
        System.out.println(lastNumber1);

        String lastLanguage2 = UtilList.getLast2(langs);
        System.out.println(lastLanguage2);

        Integer lastNumber2 = UtilList.<Integer>getLast2(nums);
        System.out.println(lastNumber2);
    }
}
