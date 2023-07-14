//               01234567...
let umaString = "Um texto para realizar alguns testes.";

console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('m', 3));
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/[x]/g));
console.log(umaString.replace(/r/g, '#'));
console.log(umaString.length);
console.log(umaString.slice(3, 8));
console.log(umaString.slice(-7, -1));
console.log(umaString.substring(umaString.length -7, umaString.length -1));
console.log(umaString.split(' ', 3));
console.log(umaString.toLocaleUpperCase());
console.log(umaString.toLocaleLowerCase());


/*
//               01234567...
let umaString = "Um texto";

console.log(`${umaString}Em um lindo dia.`);
console.log(umaString + 'Em um lindo dia.');
console.log(umaString.concat('Em um lindo dia.'));
*/

/*
//               01234567...
let umaString = "Um texto";

console.log(umaString.charAt(6));
*/
/*
//               01234567...
let umaString = "Um texto";

console.log(umaString[5]);
*/

/*
let umaString = "Um \"texto\"";

console.log(umaString); 
*/