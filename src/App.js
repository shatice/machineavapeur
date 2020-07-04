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
import QuickNav from "./components/organisms/QuickNav";
import GlobalState from "./store/GlobalState";

export const customHistory = createBrowserHistory();

const App = () => {
  return (
    <GlobalState path="/chapter:chapterId/part:partId" history={customHistory}>
      <Router history={customHistory}>
        <CtaAudio />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/chapter:chapterId/part:partId">
            <Chapter />
          </Route>
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
        {/* <QuickNav /> */}
        <Footer history={customHistory} path="/chapter:chapterId/part:partId" />
      </Router>
    </GlobalState>
  );
};

export default App;
