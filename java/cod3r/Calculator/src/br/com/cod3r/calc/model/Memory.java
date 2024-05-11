package br.com.cod3r.calc.model;

import java.util.ArrayList;
import java.util.List;

public class Memory {

    private enum CommandType {
      RESET, NUMBER, SIGNAL,  DIV, MULT, SUB, SUM, EQUAL, COMMA;
    };

    private static final Memory instance = new Memory();

    private final List<MemoryObserver> observers =
            new ArrayList<>();

    private CommandType lastOperation =  null;
    private boolean toReplace = false;
    private String actualText = "";
    private String bufferText = "";
    public Memory(){

    }

    public static Memory getInstance() {
        return instance;
    }

    public void addObserver(MemoryObserver observer){
        observers.add(observer);
    }

    public String getActualText() {
        return actualText.isEmpty() ? "0" : actualText;
    }

    public void processCommand(String text){

        CommandType commandType = detectCommandType(text);
        System.out.println(commandType);
        
        if (commandType == null){
            return;
        } else if (commandType == CommandType.RESET) {
            actualText = "";
            bufferText = "";
            toReplace = false;
            lastOperation = null;
        } else if (commandType == CommandType.SIGNAL && actualText.contains("-")) {
            actualText = actualText.substring(1);

        } else if (commandType == CommandType.SIGNAL && !actualText.contains("-")) {
                actualText = "-" + actualText;
    } else if (commandType == CommandType.NUMBER ||
                commandType == CommandType.COMMA) {
            actualText = toReplace ? text : actualText + text;
            toReplace = false;
        } else {
            toReplace = true;
            actualText = getOperationResult();
            bufferText = actualText;
            lastOperation = commandType;
        }

        observers.forEach(o -> o.changeValue(getActualText()));
    }

    private String getOperationResult() {
        if (lastOperation == null || lastOperation == CommandType.EQUAL){
            return actualText;
        }

        double bufferNumber = Double.parseDouble(bufferText.replace(",", "."));

        double actualNumber = Double.parseDouble(actualText.replace(",", "."));

        double result = 0;

        if (lastOperation == CommandType.SUM){
            result = bufferNumber + actualNumber;
        } else if (lastOperation == CommandType.SUB) {
            result = bufferNumber - actualNumber;
        } else if (lastOperation == CommandType.MULT) {
            result = bufferNumber * actualNumber;
        } else if (lastOperation == CommandType.DIV) {
            result = bufferNumber / actualNumber;
        }

        String text = Double.toString(result).replace(".", ",");
        boolean whole = text.endsWith(",0");
        return whole ? text.replace(",0", "") : text;
    }

    private CommandType detectCommandType(String text) {
        if (actualText.isEmpty() && text == "0"){
            return null;
        }

        try {
            Integer.parseInt(text);
            return CommandType.NUMBER;
        } catch (NumberFormatException e) {
           if ("AC".equals(text)){
               return CommandType.RESET;
           } else if ("/".equals(text)) {
               return CommandType.DIV;
           } else if ("*".equals(text)) {
               return CommandType.MULT;
           } else if ("+".equals(text)) {
               return CommandType.SUM;
           } else if ("-".equals(text)) {
               return CommandType.SUB;
           } else if ("=".equals(text)) {
               return CommandType.EQUAL;
           } else if ("±".equals(text)) {
               return CommandType.SIGNAL;
           } else if (",".equals(text) && !actualText.contains(",")) {
               return CommandType.COMMA;
           }
        }
        return null;
    }
}
