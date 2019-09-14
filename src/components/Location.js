import React, {useEffect, useState}from "react";
import axios from "axios";

const Location = (props) => {
   const [location, setLocation] = useState([])
   // const id = props.match.params.id;  
   useEffect(()=>{
      axios
      .get(`https://rickandmortyapi.com/api/location/`)  
         .then(response=>{
            setLocation(response.data.results)
            console.log(response.data.results)
         }) 
         .catch(error=>{
            console.log(error)
         })
   },[])
   return (
      <section className="character-list grid-view">
        <h2>
          TODO: `array.map()` over your state here!
          {location.map((item, key) => (
          <p key={key}>{item.type}</p>
        ))}
        
        </h2>
      </section>
    );
   }
      
export default Location;