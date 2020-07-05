import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./styles/styles.scss";

import Home from "./views/Home";
import Chapter from "./views/Chapter";
import End from "./views/End";

/***** COMPONENTS *****/
import Footer from "./components/molecules/Footer";
import CtaAudio from "./components/atoms/CtaAudio";
import Target from "./components/organisms/Target";
import Infos from "./components/molecules/Infos";
// import Test from "./components/Test";
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
        </Switch>
        <Footer history={customHistory} path="/chapter:chapterId/part:partId" />
      </Router>
    </GlobalState>
  );
};

export default App;
