import { formatWithValidation } from 'next/dist/next-server/lib/utils'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Containercomp from '../components/Containercomp'
import List from '../components/List'
import Navegacion from '../components/Navegacion'
import styles from '../styles/Home.module.css'
import {useState,useEffect} from 'react'

import {Provider} from "react-redux"
import store from "../components/store"

const Home =(props)=> {
 
// const [datos,SetDatos]=useState([])

// useEffect(()=>{
//   obtenerDatos()
  
// },[])

// const obtenerDatos=async()=>{
//   const data =await fetch('http://localhost:3001/productos')
//   const products=await data.json()
//  console.log(products)
//   SetDatos(products)
   
// }


  return (
      <Provider store={store}>
          <Containercomp>
              <Head>
              <title>Inicio</title>
              </Head>
                <h1>Productos </h1>
                <div className="container-fluid" >
                <List ></List>
                </div>

          </Containercomp>
      </Provider>    
  )
 
}





// Home.getInitialProps = async (ctx) => {
//   const res = await fetch('http://localhost:3001/productos')
//   const json = await res.json()
//   return { nombres: json}
// }

export default Home;