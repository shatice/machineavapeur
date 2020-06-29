import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/***** COMPONENTS *****/
import Chapter1 from "./chapters/chapter1/chapter1";
import Chapter1Page2 from "./chapters/chapter1/chapter1Page2";

import Home from "./views/Home";
import Chapter from "./views/Chapter";
import End from "./views/End";

import Coal from "./scenes/coal/coal.jsx";
import Test1 from "./testGsap/Test1";
import Navigation from "./components/navigation/navigation";
import NavigationStore from "./components/navigation/navigationStore";

import { chaptersList } from "./constant";

function App() {
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
  return (
    <>
      {/* <Coal /> */}
      {/* <Test1></Test1> */}
      <Chapter1 />
      <Chapter1Page2 />

      <Router>
        <Switch>
          <NavigationStore.Provider value={{ selectedChapter, selectChapter }}>
            <Navigation />
          </NavigationStore.Provider>
          <Route exact path="/" component={Home} />
          <Route exact path="/chapter" component={Chapter} />
          <Route exact path="/end" component={End} />

          <Route exact path="/coal" component={Coal} />
          <Route exact path="/test1" component={Test1} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
