import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./styles/styles.scss";

import Home from "./views/Home";
import Chapter from "./views/Chapter";
import End from "./views/End";

/** TO BE REMOVED - FOR TEST */
import Chapter1 from "./scenes/chapter1/chapter1";
import Coal from "./scenes/coal/Coal.jsx";
import Chap1Part4 from "./scenes/chapter1/c1p4";
import Chap1Part3 from "./scenes/chapter1/c1p3";

/***** COMPONENTS *****/
import Footer from "./components/molecules/Footer";
import CtaAudio from "./components/atoms/CtaAudio";
import Target from "./components/organisms/Target";
import Infos from "./components/molecules/Infos";
import Test from "./components/Test";
import NavStore from "./store";

export const customHistory = createBrowserHistory();

const App = () => {
  const [subChapter2, setSubChapter2] = useState(0);
  return (
    <Router history={customHistory}>
      <NavStore.Provider value={{ subChapter2, setSubChapter2 }}>
        <CtaAudio />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/chapter:chapterId/part:partId"
            component={Chapter}
          />
          <Route exact path="/end" component={End} />

          {/** TO BE REMOVED - FOR TEST */}
          <Route exact path="/coal" component={Coal} />
          <Route exact path="/chap1part1" component={Chapter1} />
          <Route exact path="/chap1part4" component={Chap1Part4} />
          <Route exact path="/chap1part3" component={Chap1Part3} />
          <Route exact path="/target" component={Target} />
          <Route exact path="/card" component={Infos} />
          <Route exact path="/test" component={Test} />
        </Switch>
        <Footer
          history={customHistory}
          path="/chapter:chapterId/part:partId"
          subChapter2={subChapter2}
        />
      </NavStore.Provider>
    </Router>
  );
};

export default App;
