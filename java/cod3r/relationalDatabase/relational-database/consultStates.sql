SELECT * FROM states

SELECT acronym, name as "State name" from states
WHERE region = "South"

SELECT name, region, population from states
WHERE population >= 10
order by population desc