import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'

const Carrito=({pedido,total,agregarCantidad,quitarCantidad,quitarProductoCarrito})=>{

    const [sumatotal,SetSuma]=useState(0)

            const suma=pedido.reduce((acum,{precio_venta,count})=>acum +count*precio_venta,0)
             
            
          
   const solicitarPedido=()=>{
       console.log('pidendo cosas')
      alert('PEDIDO REALIZADO CON EXITO')

   }

    return(
        <div>
           <table className="table">
                                 <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">PRODUCTO</th>
                                    <th scope="col">DESCRIPCION</th>
                                    <th scope="col">PRECIO</th>
                                    
                                </tr>
                                </thead>
                {
                    
                pedido && pedido.map(u=>(
                       
                                <tbody  key={u.id}>
                                  
                                <tr>
                                    <th scope="row">{u.count}</th>
                                    <td>{u.nombre}</td>
                                    <td>{u.descripcion}</td>
                                    <td>{u.precio_venta}</td>
                                   <td> <button type="button" className="btn btn-success" onClick={()=>agregarCantidad(u,pedido)} >+</button></td>
                                   <td><button type="button" className="btn btn-success" onClick={()=>quitarCantidad(u,pedido)} >-</button></td>
                                   <td><button type="button" className="btn btn-danger" onClick={()=>quitarProductoCarrito(u,pedido)} >X</button></td>
                                </tr>
                                     
                                </tbody>
                                   
                        
                    ))
                    
                }
            
        </table>
        <p>TOTAL A PAGAR  :${suma}</p> 
        <button type="button" className="btn btn-success" onClick={()=>solicitarPedido()} >Solicitar pedido</button>
           
    </div>   
    )
}


const mapStateToProps = state=>({
    pedido:state.pedido,
    total:state.total

})

const mapDispatchToProps =dispatch=>({
    agregarCantidad(item,pedido){
        const cartItems=pedido.slice();
        let alreadyExist=false;
        cartItems.forEach(x => {
            if(x.id===item.id){
                alreadyExist=true;
                x.count++;
            }
        });
        dispatch({
                    type:'ADD_TO_CARRITO',
                    payload:{cartItems}
                 }) 
    },
    quitarCantidad(item,pedido){
        const cartItems=pedido.slice();
       
        cartItems.forEach(x => {
            if(x.id===item.id){
                x.count--;
                x.count==0 ? x.count=1:0
            }
        });
        dispatch({
            type:'DISMINUIR_CANTIDAD',
            payload:{cartItems}
         }) 
      
        
    },
    quitarProductoCarrito(item,pedido){
        const cartItems=pedido.slice().filter(
            x=>x.id !==item.id
        )
     
         dispatch({
             type:'DELETE_TO_CARRITO',
             payload:cartItems
         })
    },

})



export default  connect(mapStateToProps,mapDispatchToProps)(Carrito);