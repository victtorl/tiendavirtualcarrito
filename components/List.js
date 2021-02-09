import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import store from './store'

const List=({productos,pedido,agregarAlCarrito,quitarDelAlCarrito})=>{

    const [datos,SetDatos]=useState([])

    useEffect(()=>{
      obtenerDatos()

    },[])

    
    
    const obtenerDatos=async()=>{
      const data =await fetch('http://localhost:3001/productos')
      const products=await data.json()
    //  console.log(products)
      SetDatos(products)
      llenarDatos(products)
       
    }





    return(
        <div className="card-group">
            {
                    productos.map(u=>(
                        <li className="list-group-item list-group-item-active" key={u.id}>
                           
                            <div className="card text-white bg-dark mb-3" style={{width: '18rem'} } >
                                <div className="card-body">
                                <h5 className="card-title">{u.nombre}</h5>
                                <p className="card-text">{u.descripcion}</p>
                                <p className="card-text">precio:    ${u.precio_venta}</p>
                                </div>
                              
                                <div className="card-body">
                                <button type="button" className="btn btn-success" onClick={()=>agregarAlCarrito(u,pedido)} >Agregar</button>
                                </div>
                            </div>

                            

                        </li>
                    ))
            }
        </div>
    )
}


const llenarDatos=(data)=>{
    const action={
        type:'ADD_TODO',
        payload:data
    }
    store.dispatch(action)
    // console.log('haz algo ')
}


const mapStateToProps = state=>({
    productos:state.productos,
    pedido:state.pedido

})
const mapDispatchToProps =dispatch=>({
    agregarAlCarrito(item,pedido){

            const cartItems=pedido.slice();
            let alreadyExist=false;
            cartItems.forEach(x => {
                if(x.id===item.id){
                    alreadyExist=true;
                    x.count++;
                }
            });
            if(!alreadyExist){
                cartItems.push({...item,count:1})
            }
            dispatch({
                        type:'ADD_TO_CARRITO',
                        payload:{cartItems}
                     }) 
            
    },
   
})

export default  connect(mapStateToProps, mapDispatchToProps)( List);