SELECT 
    s.name as estado,
    c.name as City,
    region as Region
from states s, cities c
WHERE s.id = c.state_id;

SELECT 
    c.name AS Citie,
    s.name AS State,
    s.region AS Region
FROM states s
INNER JOIN cities c ON s.id = c.state_id;
