import { useState, useEffect } from "react";
import api from "../../Services/api";
import { Link } from "react-router-dom";
import './Home.css'

function Home(){
    const [filmes,setFilmes] = useState([]);
    const[loading,setLoading] = useState(true);
    const[busca,setBusca]= useState([]);


    useEffect( () =>{

        async function loadfilmes(){
            const response = await api.get("movie/now_playing",{
                params:{
                api_key: "0e3819ba64ac1208db654195862aaf03",
                language: "pt-BR",
                page: 1
                }
            })

            setFilmes(response.data.results);
            setBusca(response.data.results);
            setLoading(false);
        }
        loadfilmes();

        
    } ,[])

    if(loading)
    {
        return(
            <div className="loading">
                <h2>Carregando Filmes....</h2>
            </div>
        )
    }

    const handleChange = ({target}) => {
        if(!target.value){
            setBusca(filmes);
            return;
        }

        const filter = busca.filter((b) => (b.title.includes(target.value)));

        setBusca(filter);
    }
    
    return(
        <div className="container">
            <div className="pesquisa">
            <input type="text" placeholder="Digite o nome do Filme" onChange={handleChange}/>
            </div>
             <div className="lista-filme">
                {busca.map((value)=>{
                    return(
                        <article key={value.id}>
                            <strong>{value.title}</strong>
                            <br/>
                            <img src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} alt={`Poster do filme ${value.title}`}/>
                            <Link to={`/Filmes/${value.id}`}>Acessar Filme</Link>
                        </article>
                    )
                })}
            </div>
        </div> 
    )
}

export default Home;