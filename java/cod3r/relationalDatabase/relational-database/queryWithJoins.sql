SELECT * FROM mayors
SELECT * FROM cities

SELECT * FROM cities c INNER JOIN mayors m on c.id = m.city_id
SELECT * FROM cities c LEFT OUTER JOIN mayors m on c.id = m.city_id
SELECT * FROM cities c RIGHT JOIN mayors m on c.id = m.city_id
-- SELECT * FROM cities c FULL JOIN mayors m on c.id = m.city_id

SELECT * FROM cities c LEFT OUTER JOIN mayors m on c.id = m.city_id
UNION
SELECT * FROM cities c RIGHT JOIN mayors m on c.id = m.city_id