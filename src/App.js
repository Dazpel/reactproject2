import React from 'react';

import Home from './Components/Home.jsx'
import GuessFood from './Components/GuessFood'
import FridgeRecipe from './Components/FridgeRecipe'
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/GuessFood"
            render={(props) => (
              <GuessFood
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/FridgeRecipe"
            render={(props) => (
              <FridgeRecipe
                {...props}
              />
            )}
          />

        </Switch>
    </div>
  );
}

export default App;
