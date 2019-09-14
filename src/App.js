import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";
import EpisodeList from "./components/EpisodeList.js";
import Location from"./components/Location";
export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <Route path ="/character" component={CharacterList}/>
      <Route path="/episode" component={EpisodeList}/>
      <Route path="/location" component={Location}/>

    </main>
  );
}
