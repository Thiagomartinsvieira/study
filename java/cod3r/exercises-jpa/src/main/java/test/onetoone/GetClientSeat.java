package test.onetoone;

import infra.DAO;
import model.onetoone.Client;
import model.onetoone.Seat;

public class GetClientSeat {
    public static void main(String[] args) {

        DAO< Client> daoClient = new DAO<>(Client.class);

        Client client = daoClient.getPerId(1L);
        System.out.println(client.getSeat().getName());

        daoClient.close();

        DAO<Seat> daoSeat = new DAO<>(Seat.class);
        Seat seat = daoSeat.getPerId(4L);

        System.out.println(seat.getClient().getSeat().getName());

        daoSeat.close();

    }
}
