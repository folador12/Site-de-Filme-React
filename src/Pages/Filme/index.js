import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../Services/api";
import './Filme.css'

function Filme(){
   
   const { id } = useParams();

   const [filme, setFilme] = useState({});
   const[loading,setLoading] = useState(true);

   useEffect(()=>{
      async function loadfilme(){
         await api.get(`/movie/${id}`,{
            params:{
               api_key: "0e3819ba64ac1208db654195862aaf03",
               language: "pt-BR",
            }
         })
         .then((response)=>{
            setFilme(response.data);
            setLoading(false);
         })
         .catch(()=>{
            console.log("Filme não encontrado");
         })
      }

      loadfilme();
   }, [])

   if(loading)
   {
       return(
           <div className="loading">
               <h2>Carregando Filmes....</h2>
           </div>
       )
   }


   return(

      <div className="filme-info">
         <h1>{filme.title}</h1>
         <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
      </div>
      
   ) 
}

export default Filme;