module org.example.workshopjavafxjdbc {
    requires javafx.controls;
    requires javafx.fxml;

    requires org.controlsfx.controls;

    opens org.example.workshopjavafxjdbc to javafx.fxml;
    exports org.example.workshopjavafxjdbc;
}