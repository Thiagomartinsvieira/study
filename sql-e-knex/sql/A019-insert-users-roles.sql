INSERT INTO users_roles (user_id, role_id)
VALUES
(27
, 3);

SELECT user_id, role_id  from users_roles WHERE
user_id = 27 and role_id = 3;

select 
id, 
(select id from roles order by rand() limit 1) as qualquer 
from users;

insert into users_roles (user_id, role_id)
select 
id, 
(select id from roles order by rand() limit 1) as qualquer 
from users;