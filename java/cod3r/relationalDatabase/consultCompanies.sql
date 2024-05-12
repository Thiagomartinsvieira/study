SELECT company.name AS CompanyName, city.name AS CityName
FROM companies company
JOIN companies_units ON company.id = companies_units.company_id
JOIN cities city ON city.id = companies_units.city_id
WHERE companies_units.headquarters = 1;  
