/*
select * from users
where 
created_at between 
'2020-06-12 00:00:00' 
and '2020-09-04 23:59:59'
and id between 163 and 210;
*/
const knex = require('../../knex/config/database');
const selectBetween = knex('users')
  .select('id',  'first_name')
  .whereBetween('id', [10, 43])
  .orWhereBetween('id', [1, 5]);

console.log(selectBetween.toString());

selectBetween.then((data) => {
  console.log(data);
}).catch((e) => {
  console.log(e.message);
}).finally(() => {
  knex.destroy();
});