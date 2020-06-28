import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Coal from "../scenes/coal/Coal.jsx";
import Navigation from "./Navigation.jsx";
import {
  NavigationStore,
  selectedChapter,
  selectChapter,
} from "./NavigationStore.jsx";
import { chaptersList } from "../constant";

const App = () => {
  const [selectedChapter, setSelectedChapter] = useState({
    label: "La machine a vapeur & le charbon",
    value: 0,
  });
  const selectChapter = (value) => {
    console.log(value);
    const { chaptersTitle } = chaptersList;
    const newChapter = chaptersTitle.filter(
      (chapterTitle) => value === chapterTitle.value
    );
    console.log(newChapter);
    setSelectedChapter(newChapter[0]);
  };
  // return (
  //   <Router>
  //     <NavigationStore.Provider value={{ selectedChapter, selectChapter }}>
  //       <Navigation />
  //     </NavigationStore.Provider>

  //     <Switch>
  //       <Route path="/about">
  //         <About />
  //       </Route>
  //       <Route path="/chapter-1">
  //         <Coal />
  //       </Route>
  //       <Route path="/">
  //         <Home />
  //       </Route>
  //     </Switch>
  //   </Router>
  // );
};
export default App;

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }