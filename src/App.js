import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

/***** VIEWS *****/
import Chapter1 from "./chapters/chapter1/chapter1";
import Chapter1Page2 from "./chapters/chapter1/chapter1Page2";

import Home from "./views/Home";
import Chapter from "./views/Chapter";
import End from "./views/End";
import Coal from "./scenes/coal/Coal.jsx";
import Test1 from "./testGsap/Test1";
import Chap1Part4 from "./scenes/test_c1p4/Chap1Part4";
import Chap1Part3 from "./scenes/test_c1p3/Chap1Part3";
import Target from "./components/Target";
// import Card from "./components/Card";

/***** COMPONENTS *****/
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

export const customHistory = createBrowserHistory();

const App = () => {
  return (
    <Router history={customHistory}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chapter" component={Chapter} />
        <Route exact path="/end" component={End} />

        {/** TO BE REMOVED - FOR TEST */}
        <Route exact path="/coal" component={Coal} />
        <Route exact path="/chap1part1" component={Chapter1} />
        <Route exact path="/test1" component={Test1} />
        <Route exact path="/chap1part4" component={Chap1Part4} />
        <Route exact path="/chap1part3" component={Chap1Part3} />
        <Route exact path="/target" component={Target} />
        {/* <Route exact path="/card" component={Card} /> */}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
