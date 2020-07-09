import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./views/Home";
import Chapter from "./views/Chapter";
import End from "./views/End";

/***** COMPONENTS *****/
import CtaAudio from "./components/atoms/CtaAudio";
import GlobalState from "./store/GlobalState";
import Auth from "./views/Auth";
import context from "./store/context";

export const customHistory = createBrowserHistory();

const App = () => {
  const [isProtected, setIsProtected] = useState(true);

  useEffect(() => {
    if (isProtected === undefined) {
      window.localStorage.setItem("isProtected", true);
    }
    setIsProtected(window.localStorage.getItem("isProtected"));
  }, [window.localStorage]);
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
        {!isProtected && <Auth />}
      </Router>
    </GlobalState>
  );
};

export default App;
