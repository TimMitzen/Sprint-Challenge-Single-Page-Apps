import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])
  // const id = props.match.params.id;
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        
        setCharacter(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      <>
        
        {character.map((item, key) => (
          <Container>
          <p key={key}>Name: {item.name}</p> 
          <p>Status: {item.status}</p> 
          <p>Species: {item.species} </p>
          <img src ={item.image}/>
         </Container>
        ))}
      </>
    </section>
  );
}
const Container = styled.div`
display: flex;
flex-wrap: wrap;`;
