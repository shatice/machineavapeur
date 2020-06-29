import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/***** COMPONENTS *****/
import Home from './routes/Home';
import Chapter from './routes/Chapter';
import End from './routes/End';

import Coal from './scenes/coal/Coal'; 
import Test1 from "./testGsap/Test1";

function App() {
  return(
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/chapter" component={Chapter}/>
          <Route exact path="/end" component={End}/>

          <Route exact path="/coal" component={Coal}/>
          <Route exact path="/test1" component={Test1}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
