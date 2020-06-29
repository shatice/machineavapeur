import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/***** COMPONENTS *****/
import Home from "./views/Home";
import Chapter from "./views/Chapter";
import End from "./views/End";

import Coal from "./scenes/coal/Coal.jsx";
import Test1 from "./testGsap/Test1";
import Navigation from "./components/navigation/Navigation";
import NavigationStore from "./components/navigation/NavigationStore";

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
    <div>
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
    </div>
  );
}

export default App;
