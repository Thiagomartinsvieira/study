package br.com.cod3r.mf.vision;

import br.com.cod3r.mf.exception.ExitException;
import br.com.cod3r.mf.exception.ExplosionException;
import br.com.cod3r.mf.model.Board;

import java.util.Arrays;
import java.util.Iterator;
import java.util.Scanner;

public class BoardConsole {
    private Board board;
    private Scanner scanner = new Scanner(System.in);

    public BoardConsole(Board board) {
        this.board = board;

        runGame();
    }

    private void runGame() {
        try{
            boolean continuar = true;

            while (continuar){
                gameCycle();

                System.out.println("Other game? (S/n) ");
                String response = scanner.nextLine();

                if ("n".equalsIgnoreCase(response)){
                    continuar = false;
                } else {
                    board.restart();
                }

            }

        } catch (ExitException e){
            System.out.println("Bye!!!");
        } finally {
            scanner.close();
        }
    }

    private void gameCycle() {
        try {

            while (!board.goalAchieved()) {
                System.out.println(board);

                String typed = capturedEnteredValue("Enter (x, y): ");

                Iterator<Integer> xy = Arrays.stream(typed.split(","))
                        .map(e -> Integer.parseInt(e.trim())).iterator();

                typed = capturedEnteredValue("1 - Open or 2 - Mark(unmarked)");

                if ("1".equalsIgnoreCase(typed)){
                    board.open(xy.next(), xy.next());
                } else if ("2".equals(typed)){
                    board.toggleTag(xy.next(), xy.next());
                }
            }

            System.out.println(board);
            System.out.println("You win!!!");
        } catch (ExplosionException e){
            System.out.println(board);
            System.out.println("You lost!");
        }
    }

    private String capturedEnteredValue(String text){
        System.out.println(text);
        String typed = scanner.nextLine();

        if ("exit".equalsIgnoreCase(typed)){
            throw new ExitException();
        }

        return typed;
    }
}
