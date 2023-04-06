import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Favoritos.css'

function Favoritos(){
    const[filme,setFilme] = useState([]);

    useEffect(()=>{
       const minhalista = localStorage.getItem("@chave");
       setFilme(JSON.parse(minhalista) || [] ); 
    }, []);


    return(
        <div className="meus-filmes">
            <h1>Minha Lista de Filmes Favoritos</h1>
            <ul>
                {filme.map((value) => {
                    return(
                        <li key={value.id}>
                            <span>{value.title}</span>
                            <div>
                                <Link to={`/Filmes/${value.id}`}>Detalhes</Link>
                                <button>Excluir filme</button>
                            </div>
                        </li>
                    )
                })}            
            </ul>
        </div>
    )
}

export default Favoritos;