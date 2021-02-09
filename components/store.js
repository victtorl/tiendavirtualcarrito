import {createStore,applyMiddleware} from 'redux'

import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const initialState={
    productos:[],
    pedido:[],
    aux:[],
    total:[0]
    
}


const reducerAdmin =(state=initialState,action)=>{
switch(action.type){
    case 'ADD_TODO':
        return{
            ...state,
             productos:action.payload,
        }
   case 'ADD_TO_CARRITO':
        return{
            ...state,
            // productos:state.productos.filter(m => {m.id !== action.payload.id}),
              
              pedido:action.payload.cartItems,

            // total:state.total.concat(action.payload.precio_venta)


        }

    case 'DELETE_TO_CARRITO':
         return{
             ...state,
                   // total:state.total.filter(m=>m.id !== action.payload.id)
       
              pedido:action.payload,
                
                   
                }                                          
            
    case 'DISMINUIR_CANTIDAD':
         return{
                ...state,
                              // total:state.total.filter(m=>m.id !== action.payload.id)
                  
              pedido:action.payload.cartItems,
                           
                              
                }                              
    default:
        return state  
    
}

}

//metodos
const existeItem=()=>{
    console.log('pedido')
}




//acciones




export default createStore(reducerAdmin,composeWithDevTools(applyMiddleware(thunk)))