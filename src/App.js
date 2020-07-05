import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./styles/styles.scss";

import Home from "./views/Home";
import Chapter from "./views/Chapter";
import End from "./views/End";

/***** COMPONENTS *****/
import Footer from "./components/molecules/Footer";
import CtaAudio from "./components/atoms/CtaAudio";
import NavStore from "./store";
// import QuickNav from "./components/organisms/QuickNav";

export const customHistory = createBrowserHistory();

const App = ({ match }) => {
  console.log(match);
  const [subChapterContext, setSubChapterContext] = useState(0);
  const [chapterContext, setChapterContext] = useState(0);
  const [data, setData] = useState({});
  return (
    <Router history={customHistory}>
      <NavStore.Provider
        value={{
          subChapterContext,
          setSubChapterContext,
          setData,
          data,
          setChapterContext,
          chapterContext,
          customHistory,
        }}
      >
        <CtaAudio />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/chapter:chapterId/part:partId"
            component={Chapter}
          />
          <Route exact path="/end" component={End} />
        </Switch>
        {/* <QuickNav /> */}
        <Footer
          history={customHistory}
          path="/chapter:chapterId/part:partId"
          subChapterContext={subChapterContext}
        />
      </NavStore.Provider>
    </Router>
  );
};

export default App;
