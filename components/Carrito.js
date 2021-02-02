import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'

const Carrito=({pedido,total,agregarCantidad,quitarCantidad})=>{

    const [sumatotal,SetSuma]=useState(0)

            const suma=total.reduce(function(a,b){return a+b})
     const calcularCantidad=()=>{
        var matriz = {};
            pedido.forEach(function(registro) { 
              var dato = registro.name;
              matriz[dato] = matriz[dato] ? (matriz[dato] + 1) : 1;
            });
            matriz = Object.keys(matriz).map(function(dato) {
                return { producto: dato, cant: matriz[dato] };
             });
            console.log('sadsajksda');
     }               
            
          
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
                    pedido.map(u=>(
                       
                                <tbody >
                                <tr>
                                    <th scope="row">#</th>
                                    <td>{u.nombre}</td>
                                    <td>{u.descripcion}</td>
                                    <td>{u.precio_venta}</td>
                                    <button type="button" className="btn btn-success" onClick={()=>agregarCantidad(u)} >+</button>
                                    <button type="button" className="btn btn-success" onClick={()=>quitarCantidad(u)} >-</button>
                                    <button type="button" className="btn btn-danger" onClick={()=>agregarAlCarrito(u)} >X</button>
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
    agregarCantidad(item){
        dispatch({
            type:'ADD_UNO_MAS',
            payload:item
        })
    },
    quitarCantidad(item){
        dispatch({
            type:'DELETE_UNO_MENOS',
            payload:item
        })
    },
    solicitarPedido(pedido){
        dispatch({
            type:'SOLICITAR_PEDIDO',
            payload:pedido
        })
    },

})



export default  connect(mapStateToProps,mapDispatchToProps)(Carrito);