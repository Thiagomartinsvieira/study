-- seleciona base da dados
use base_da_dados;
-- Mostra as tabela da base da dados
show tables;
-- Descreve as colunas da tabela
describe users;
-- Iserir registros base da dados
INSERT into users (first_name, last_name, email, password_hash) values 
("Leticia", "Avelar", "leticial@email.com", "e"),
("Bruna", "Alberta", "bruna@email.com", "f") 