import React, {useEffect, useState}from "react";
import axios from "axios";

const Location = (props) => {
   const [location, setLocation] = useState([])
   const id = props.match.params.id;  
   useEffect(()=>{
      axios
      .get(`https://rickandmortyapi.com/api/location/${id}`)
         .then(response=>{
            setLocation(response.results)
         }) 
         .catch(error=>{
            console.log(error)
         })
   }),[id]
   }
      
export default Location;