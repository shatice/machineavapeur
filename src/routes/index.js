import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
<<<<<<< HEAD
import Coal from "../scenes/coal/coal.jsx";
import Navigation from "./navigation.jsx";
import { NavigationStore } from "./navigationStore.jsx";
=======
import Coal from "../scenes/coal/Coal.jsx";
import Navigation from "./Navigation.jsx";
import {
  NavigationStore,
  selectedChapter,
  selectChapter,
} from "./NavigationStore.jsx";
>>>>>>> a8a50b5e5660349acc1d7443bbfc9540c59450b5
import { chaptersList } from "../constant";

const App = () => {
  const [selectedChapter, setSelectedChapter] = useState({
    label: "La machine a vapeur & le charbon1",
    value: 0,
  });
  const selectChapter = (value) => {
    const { chapters } = chaptersList;
    const newChapter = chapters.filter(
      (chapterTitle) => value === chapterTitle.value
    );
    setSelectedChapter(newChapter[0]);
  };
<<<<<<< HEAD

  return (
    <Router>
      <NavigationStore.Provider value={{ selectedChapter, selectChapter }}>
        <Navigation />
      </NavigationStore.Provider>
=======
  // return (
  //   <Router>
  //     <NavigationStore.Provider value={{ selectedChapter, selectChapter }}>
  //       <Navigation />
  //     </NavigationStore.Provider>
>>>>>>> a8a50b5e5660349acc1d7443bbfc9540c59450b5

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