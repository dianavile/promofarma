import React, { Component } from 'react';
//import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div className="App">
       
        <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
             </div>
       </BrowserRouter>
    );
  }
}

export default App;
