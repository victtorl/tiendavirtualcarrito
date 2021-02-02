import Head from 'next/head'
import React  from 'react'
import Containercomp from '../components/Containercomp'

import ChatBot from 'react-simple-chatbot';


const steps = [
    {
        id: '1',
        message: 'Hola bienvenido, como podemos ayudarte?',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'Acerca de pedidos', trigger: '4' },
          { value: 2, label: 'No entiendo', trigger: '3' },
          { value: 3, label: 'Acerca de los productos', trigger: '5' },
          { value: 4, label: 'Acerca del carrito', trigger: '6' }
        ],
      },
      {
        id: '3',
        message: 'Pues aqui tiene las opciones disponibles XD.',
        trigger: '2',
      },
      {
        id: '4',
        message: 'Los pedidos se realizan en la seccion de carrito, luego espere :D que su solicitud sera procesada ',
        trigger:'2',
      },
      {
        id: '5',
        message: 'Los productos estan listados en la pestaña de inicio puede elegir entre uno de ellos estos se añadiran al carrito ',
        trigger:'2',
      },
      {
        id: '6',
        message: 'El carrito gestiona los productos que usted pedira :D ',
        trigger:'2',
      }
    
  ];
  


const ChatbotComponent=()=>{
    return ( 
        <Containercomp>
                    <Head>
                    <title>Chatbot</title>
                    </Head>
           <div className="container">
                <ChatBot steps={steps} />
           </div>
            
        </Containercomp>
    )
}



export default ChatbotComponent