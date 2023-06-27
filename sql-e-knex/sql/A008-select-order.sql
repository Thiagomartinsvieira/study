-- Order ordena valores:
-- order by id asc (id crescente)
-- order by id desc (id decrescente)
-- order by id asc, first_name desc (prioriza o id)
select id, first_name, email as uemail from users
where id BETWEEN 20 and 30
order by first_name desc; 