import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

/***** COMPONENTS *****/
import Home from "./views/Home";
import Chapter from "./views/Chapter";
import End from "./views/End";

import Coal from "./scenes/coal/Coal.jsx";
import Navigation from "./components/navigation";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/end" component={End} />
        <Route path="/chapter" component={Chapter} />
      </Switch>
      <Navigation />
    </Router>
  );
}

export default App;
