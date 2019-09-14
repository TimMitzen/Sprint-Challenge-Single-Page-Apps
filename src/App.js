import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";
import EpisodeList from "./components/EpisodeList.js";
import Location from"./components/Location";
import WelcomePage from "./components/WelcomePage.js";
export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      {/* <TabNav /> */}
      <Route path="/" component={WelcomePage} exact/>
      <Route path ="/character:id" render={props=><CharacterList {...props} character={CharacterList}/>}/>
      <Route path="/episode" component={EpisodeList}/>
      <Route path="/location" component={Location}/>
     

    </main>
  );
}
