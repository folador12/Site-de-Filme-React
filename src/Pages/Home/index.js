import { useState, useEffect } from "react";
import api from "../../Services/api";
 //movie/now_playing?api_key=0e3819ba64ac1208db654195862aaf03&language=pt-BR

function Home(){
    const [filmes,setFilmes] = useState([]);

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
        }
        loadfilmes();
    } ,[])
    return(
        <div>
             <div>
                {filmes.map((value)=>{
                    return(
                        <article key={value.id}>
                            <strong>{value.title}</strong>
                        </article>
                    )
                })}
            </div>
        </div>
       
    )
}

export default Home;