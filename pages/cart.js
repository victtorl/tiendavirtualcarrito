import Head from 'next/head'
import React  from 'react'
import Carrito from '../components/Carrito'
import Containercomp from '../components/Containercomp'
import Container from '../components/Containercomp'

import {Provider} from "react-redux"
import store from "../components/store"


const Cart=()=>{
    return ( 
        <Provider store={store}>
        <Containercomp>
                    <Head>
                    <title>Carrito</title>
                    </Head>
            <h1>Carrito</h1>
            <Carrito></Carrito>
        </Containercomp>
        </Provider>
    )
}

export default Cart