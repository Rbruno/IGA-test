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

          <Route path="/user/historial">
            <HistorialComponent />
          </Route>

          <Route path="/:github" component={Home}>
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
  );
}

export default App;
