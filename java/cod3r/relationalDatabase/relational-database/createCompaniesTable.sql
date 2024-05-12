CREATE TABLE IF NOT EXISTS companies (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    cnpj INT UNSIGNED, 
    PRIMARY KEY (id),
    UNIQUE KEY (cnpj)
)

CREATE TABLE IF NOT EXISTS companies_units (
    company_id  INT UNSIGNED NOT NULL,
    city_id INT UNSIGNED NOT NULL,
    headquarters TINYINT(1) NOT NULL,
    PRIMARY KEY (company_id, city_id)
)