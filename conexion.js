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
 

// module.exports = connection;

// const connection=require('../conexion')
const cors = require('cors');


const  express = require('express')

const bodyParser=require('body-parser')
  const PORT =process.env.PORT || 3001

  const app=express();
  app.use(cors());
  app.use(bodyParser.json());

  app.listen(PORT,()=>console.log(`Server runing o port ${PORT}`))

  //rutas
  app.get('/',(req,res)=>{
    res.send('WELCOME  TO MY API')
  })

  app.get('/productos',(req,res)=>{
      const sql ='SELECT * from  articulos'
      connection.query(sql,(error,results)=>{
          if(error) throw error;
          if(results.length>0){
               res.json(results)
          }
          else{
              res.send('Not results')
          }
      })
      
  })

  app.post('/carts',(req,res)=>{
    const sql ='INSERT INTO pedidos SET ?';
    const pedidoObj={
      total:req.body.total,
      cuerpo:req.body.cuerpo
      
    };
    connection.query(sql,pedidoObj,error =>{
      if(error) throw error;
      res.send('Pedido registrado con exito')
    });
    
  });

  app.post('/carrito/:id',(req,res)=>{
    res.send('enviando productos del carito del cliente con Id:')
  })

  
