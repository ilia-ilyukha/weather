import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch, Link } from "react-router-dom";
import history from "./history";
import Home from "./components/Home/Home.jsx";
import City from "./components/City/City.jsx";

class App extends React.Component { 
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Link to={`/`}>Main page</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/City/:id" component={City} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
