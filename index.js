/* 
To start a new project 
npm init -y
npm install better-sqlite3
*/

// 1.import the database driver
const  databaseDriver= require('better-sqlite3');

//2.connect to the database
const db= databaseDriver('bands.sqlite3');

//3.send our first query
let statement = db.prepare('select * from bands');

//4.Execute statement, receive results
let results= statement.all();

//5.check the results
console.log(results);

//6.using  parameters
let statement2= db.prepare(`select * from bands where genre=?
`);
let results2= statement2.all('Metal');
console.log(results2[0]);

let statement3 =db.prepare('select genre from bands where id =1');
let results3=statement3.all();
console.log(results3);

//using named parameters
 
let statement4= db.prepare(`select * from bands where genre = :genre 
`
 );
let results4=statement4.all
(
    {
        genre:'Rock'
    
    }
);

console.log(results4);

//prepare --insert something into the database

let table ='bands';
let insertstatement =db.prepare(`insert into ${table}(name,genre) values (:name, :genre)`);
 let result5=insertstatement.run
 (
    {
        name:'Rebecca',
        genre:  'Metal'
  }
 );
 console.log(result5);