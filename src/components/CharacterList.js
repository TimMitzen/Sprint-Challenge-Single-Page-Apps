import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import { Card, Icon, Image, CardMeta} from "semantic-ui-react";
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
          <>
          <Card>
          <Card.Content>
          <Card.Header> <p key={key}>{item.name}</p> </Card.Header>
          <CardMeta><p>Status: {item.status}</p> </CardMeta>
          <CardMeta><p>Species: {item.species} </p></CardMeta>
          <Image><img src={item.image}/> </Image>
          </Card.Content> 
         </Card>
         </>
        ))}
      </>
    </section>
  );
}

