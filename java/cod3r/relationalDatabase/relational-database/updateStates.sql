update states
set name = "Maranhao"
WHERE acronym = "MA"

SELECT sta.`name` from states sta WHERE acronym = "MA"

update states
SET name = "Parana", population = 11.32
WHERE acronym = "PR"

SELECT sta.name, acronym, population 
from states sta 
WHERE acronym = "PR"
