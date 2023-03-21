import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './paginas/Home/index.js';
//import Busca from './paginas/Busca/index.js';
//paginas
import Login from './paginas/Login/index.js';
import Sobre from "./paginas/Sobre/index.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route path="/Busca" exact={true} component={Busca} />
          <Route path="/" exact={true} component={Home}/>
          <Route path="/Login" exact={true} component={Login} />
          <Route path="/Sobre" exact={true} component={Sobre} />
        </Switch>


      </BrowserRouter>
    </div>
  );
}

export default App;
