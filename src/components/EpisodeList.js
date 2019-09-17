import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Icon, Image, CardMeta } from "semantic-ui-react";
const EpisodeList = () => {
  const [episode, setEpisode] = useState([]);
  // const id = props.match.params.id;
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(response => {
        setEpisode(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  //   useEffect(()=>{
  //    axios
  //    .get(`https://rickandmortyapi.com/api/location/`)
  //       .then(response=>{
  //          setLocation(response.data.results)
  //          console.log(response.data.results)
  //       })
  //       .catch(error=>{
  //          console.log(error)
  //       })
  // },[])
  return (
    <section className="character-list grid-view">
      {episode.map((item, key) => (
        <Card>
          <Card.Content>
            {" "}
            <p key={key}>Name: {item.name}</p>
          </Card.Content>
          <Card.Content>
            {" "}
            <p>Episode: {item.episode}</p>
          </Card.Content>
        </Card>
      ))}
    </section>
  );
};

export default EpisodeList;
