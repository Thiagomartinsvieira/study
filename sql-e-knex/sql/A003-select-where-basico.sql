-- where filtra registros
-- operadores de comparação = < <= > >= <> !=
-- operadores lógicos and e or
SELECT * from users
WHERE 
created_at > '2023-06-25 13:33:57' and first_name = "Jose" and password_hash = "c";

