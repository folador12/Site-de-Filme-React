import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import './Favoritos.css'

function Favoritos(){
    const[filme,setFilme] = useState([]);

    useEffect(()=>{
       const minhalista = localStorage.getItem("@chave");
       setFilme(JSON.parse(minhalista) || [] ); 
    }, []);

    function excluirfilme(id){
      let filtro = filme.filter((item) =>{
        return (item.id !== id) 
      })

      setFilme(filtro);
      localStorage.setItem("@chave", JSON.stringify(filtro));

      toast.success("Filme excluido com sucesso");
    }


    return(
        <div className="meus-filmes">
            <h1>Minha Lista de Filmes Favoritos</h1>

            {filme.length === 0 && <span>Não há filmes favoritados</span>}
            
            <ul>
                {filme.map((value) => {
                    return(
                        <li key={value.id}>
                            <span>{value.title}</span>
                            <div>
                                <Link to={`/Filmes/${value.id}`}>Detalhes</Link>
                                <button onClick={() => excluirfilme(value.id)}>Excluir filme</button>
                            </div>
                        </li>
                    )
                })}            
            </ul>
        </div>
    )
}

export default Favoritos;