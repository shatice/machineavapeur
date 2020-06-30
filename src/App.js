import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import styled from "styled-components";

/***** VIEWS *****/
import Home from "./views/Home";
import Chapter from "./views/Chapter";
import End from "./views/End";
import Coal from "./scenes/coal/Coal.jsx";

import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
export const customHistory = createBrowserHistory(); //This maintains custom history

function App() {
  return (
    <Router history={customHistory}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/end" component={End} />
        <Route path="/chapter" component={Chapter} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
