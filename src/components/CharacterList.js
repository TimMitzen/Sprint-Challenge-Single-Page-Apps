import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = [];
  const id = props.match.params.id;
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        console.log(response);
        setCharacter(response.data.results);
        console.log(setCharacter);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    <section className="character-list grid-view">
      <h2>
        TODO: `array.map()` over your state here!
        {character.map((item, key) => (
          <p key={key}>{item.name}</p>
        ))}
      </h2>
    </section>
  );
}
