import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import HistorialComponent from './components/HistorialComponent';
import NavComponent from './components/NavComponent';

function App() {
  return (
      <div className="App">
        <NavComponent />
        <Switch>

          <Route path="/IGA-test/user/historial">
            <HistorialComponent />
          </Route>

          <Route path="/IGA-test/:github" component={Home}>
          </Route>

          <Route path="/IGA-test/">
            <Home />
          </Route>
          <Route component={Home} />
        </Switch>
      </div>
  );
}

export default App;
