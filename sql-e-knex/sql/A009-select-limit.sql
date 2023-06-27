-- limit limita a qtd de valores
-- offset desloca o cursor para exibir os resultados
select id, first_name, email as uemail from users
where id BETWEEN 20 and 30
order by id asc 
limit 5 offset 0