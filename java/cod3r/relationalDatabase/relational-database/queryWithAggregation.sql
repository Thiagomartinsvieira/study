SELECT 
    region as "Região", 
    SUM(population) as Total
from states
GROUP BY region
order BY Total desc

SELECT 
    avg(population) as Total
from states