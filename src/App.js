import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//paginas
import Login from './paginas/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>

          <Route path="/Login" exact={true} component={Login} />

        </Switch>


      </BrowserRouter>
    </div>
  );
}

export default App;
