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

            total:state.total.concat(action.payload.precio_venta)


        }
    case 'UPDATE_CANTIDAD':
        return{
                ...state,
              aux:state.pedido.splice(state.pedido.findIndex(m=>m.id==action.payload.id),1),
              
              pedido:state.pedido.concat(action.payload)
            }                  
    case 'SAFA_DEL_CARRO':
         return{
            ...state,
            productos:state.productos.concat(action.payload),
            pedido:state.pedido.filter(m => m.id !== action.payload.id)
            }
    case 'ADD_UNO_MAS':
         return{
            ...state,
            total:state.total.concat(action.payload.precio_venta),
            pedido:state.pedido.concat(action.payload),
            }  
    case 'DELETE_UNO_MENOS':
         return{
            ...state,
            // total:state.total.filter(m=>m.id !== action.payload.id)

            total:state.total.splice(5,1)
            
            } 
    case 'DELETE_UNO_MENOS':
         return{
             ...state,
                   // total:state.total.filter(m=>m.id !== action.payload.id)
       
                total:state.total.splice(5,1)
                   
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