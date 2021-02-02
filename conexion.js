// const {createPool} =require('mysql');
//  const pool=createPool({
//      host:'localhost',
//      user:'root',
//      password:'',
//      database:'tawa',
//      connectionLimits:10
//  })


// module.exports=pool;









var mysql  = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tawa'
});
 
connection.connect(err=>{
    if(err) throw err; 
    console.log(`Database server Runing!`)
})
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error){
//   throw error;
//   console.log('The solution is: ', results[0].solution);
//   }else{
//     console.log('CONEXION EXITOSA')
//   }
// });
 

module.exports = connection;