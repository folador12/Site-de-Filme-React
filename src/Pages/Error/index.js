import { Link } from "react-router-dom";
import './Error.css'

function Error(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Pagina Não Encontrada</h2>
            <Link to='/'>Voltar Para Home</Link>
        </div>
    )
}

export default Error;