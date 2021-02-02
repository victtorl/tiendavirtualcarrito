import Navegacion from './Navegacion'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'


const Containercomp=(props)=>{
    return(
        <div>
            <Head>
                <title>Next js Proyect</title>
            </Head>
            <Navegacion></Navegacion>
            <div className="container p-4">
                {props.children}
            </div>
         </div>
    )
}
export default Containercomp