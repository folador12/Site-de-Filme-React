import { useParams, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";
import './Filme.css'

function Filme(){
   
   const {id}  = useParams();
   const navigate = useNavigate();

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
            navigate('/',{ replace: true } );
            return;
         })
      }

      loadfilme();
   }, [navigate,id])

   function salvarfilme(){
      const minhalista = localStorage.getItem("@chave");

      let filmessalvos = JSON.parse(minhalista) || [];

      const existe = filmessalvos.some((filmesalvo) => filmesalvo.id === filme.id);

      if(existe){
         toast.warn("Filme já está salvo")
         return;
      }
      filmessalvos.push(filme);
      localStorage.setItem("@chave", JSON.stringify(filmessalvos));
      toast.success("Filme salvo com sucesso")
   }

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

         <h2>Sinopse</h2>
         <span>{filme.overview}</span>

         <strong>Avaliação: {filme.vote_average} / 10</strong>

         <div className="botoes">
            <button onClick={salvarfilme}>Salvar</button>
            <button>
               <a href= {`https://www.youtube.com/results?search_query=trailer ${filme.title} dublado pt-br` } target="_blank" rel="noreferrer" >
                  Trailer
               </a>
            </button>

         </div>
      </div>
      
   ) 
}

export default Filme;