import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";
import Nav from "./containers/Nav/Nav";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <div className="App">
            <Nav />
         </div>
      </BrowserRouter>
    );
  }
}

export default App;
