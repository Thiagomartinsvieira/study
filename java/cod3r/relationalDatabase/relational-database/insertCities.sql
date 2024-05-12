SELECT * FROM states WHERE id = 28

INSERT INTO cities (name, area, state_id)
VALUES ("Campinas", 795, 28)

INSERT INTO cities (name, area, state_id)
VALUES ("Niteroi", 133.9, 25)

INSERT INTO cities (name, area, state_id)
VALUES (
        "Caruaru", 
        920.6, 
        (SELECT id from states WHERE acronym = "PE")
)

SELECT * from cities

INSERT INTO cities
    (name, area, state_id)
VALUES("Juazeiro do Norte", 248.2, (SELECT id from states WHERE acronym = "CE"))    