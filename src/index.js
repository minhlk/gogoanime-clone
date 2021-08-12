import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home/Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Detail from './Detail/Detail';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
        </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

