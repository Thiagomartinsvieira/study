-- in seleciona elementos entre os valores enviados

select * from users
where id in (1, 5, 12, 15, 20)
and first_name  in ('Thiago', 'Shana');