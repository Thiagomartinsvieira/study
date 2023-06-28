-- Configura um salário aleatório para users

UPDATE users set salary = round(rand() * 10000, 2);

SELECT  salary from users u  WHERE  
salary  BETWEEN 1000 and 1500
ORDER by salary  asc;