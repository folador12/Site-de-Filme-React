import { useState, useEffect } from "react";
import api from "../../Services/api";
import { Link } from "react-router-dom";
import './Home.css'

function Home(){
    const [filmes,setFilmes] = useState([]);

    useEffect( () =>{

        async function loadfilmes(){
            const response = await api.get("movie/now_playing",{
                params:{
                api_key: "0e3819ba64ac1208db654195862aaf03",
                language: "pt-BR",
                page: 2
                }
            })

            setFilmes(response.data.results);
        }
        loadfilmes();
    } ,[])
    return(
        <div className="container">
             <div className="lista-filme">
                {filmes.map((value)=>{
                    return(
                        <article key={value.id}>
                            <strong>{value.title}</strong>
                            <br/>
                            <img src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} alt={`Poster do filme ${value.title}`}/>
                            <Link to={`/filme/${value.id}`}>Acessar Filme</Link>
                        </article>
                    )
                })}
            </div>
        </div>
       
    )
}

export default Home;