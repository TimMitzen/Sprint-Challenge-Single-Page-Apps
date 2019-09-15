import React, {useEffect, useState}from "react";
import axios from "axios";
import {Card, Icon } from "semantic-ui-react"
const Location = (props) => {;
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
        
         
          {location.map((item, key) => (
          <Card>
             <Card.Content><p key={key}> {item.name}</p> </Card.Content>
             <Card.Content><p>Planet: {item.type} {item.dimension}</p> </Card.Content>
             <Card.Meta> <p>Residents: {item.residents.length}</p></Card.Meta>
             </Card>
        ))}
        
       
      </section>
    );
   }
      
export default Location;