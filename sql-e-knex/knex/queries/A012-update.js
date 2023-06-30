/*
-- Update - Atualiza registros
update users set 
first_name = 'Luiz',
last_name = 'Miranda'
where id = 29;

select * from users where id = 29;
*/
const knex = require('../../knex/config/database');
const select = knex.from('users').where('id', '=',1);
const update = knex('users').where('id', '=', 1).update({
    first_name: 'Thiago',
    last_name: 'Vieira'
  });

console.log(select.toString());
console.log(update.toString());

update.then((data) => {
  console.log(data);

  select.then((data) => {
    console.log(data);
  }).catch((e) => {
    console.log(e.message);
  });
}).catch((e) => {
  console.log(e.message);
}).finally(() => {
  knex.destroy();
});