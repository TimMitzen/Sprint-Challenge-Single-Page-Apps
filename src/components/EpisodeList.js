import React, { useEffect, useState } from "react";
import axios from "axios";

const EpisodeList = (props) => {
   const [episode, setEpisode] = useState([])
   // const id = props.match.params.id;
   useEffect(() => (
      
      axios
      .get(`https://rickandmortyapi.com/api/episode/`)
         .then(response=>{
            setEpisode(response.data.results)
            console.log(response.data.results)
         }) 
         .catch(error=>{
            console.log(error)
         })
   )),[]
   
   return(
   <>
   </>
   );
   }
      
export default EpisodeList;