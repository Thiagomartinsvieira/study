ALTER TABLE companies MODIFY cnpj VARCHAR(14);    

INSERT INTO companies
    (name, cnpj)
VALUES
    ("Bradesco", 68828930000171),
    ("Vale", 76193199000183),
    ("Cielo", 23780486000123)

DESC companies
DESC mayors

SELECT * FROM companies
SELECT * FROM cities 

INSERT INTO companies_units
    (company_id, city_id, headquarters)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);


 