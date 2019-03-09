import React, {Component} from 'react';
import Toolbar from './Toolbar';
import Tabella1 from './Tabella/Tabella1';
import Tabella2 from './Tabella/Tabella2';
import Tabella3 from './Tabella/Tabella3';
import Tabella4 from './Tabella/Tabella4';

import {Route, Switch} from 'react-router-dom';


import './App.css';



class App extends Component {
  render(){
    return(
      <div className="App">
        <Toolbar />
        <Switch>
        <Route path="/Tabella4" component ={Tabella4}/>
        <Route path="/Tabella3" component ={Tabella3}/>
        <Route path="/Tabella2" component ={Tabella2}/>
        <Route path="/" component ={Tabella1}/>
        </Switch>
      </div>
    )
  }
}
export default App;