import React, { Component } from 'react';
import logo from '../shared/images/logo.svg';
import Home from './Home/Home';
import React , { Component } from "React";
class home extends Component {
  render () {
    return <h1> I´m Home Component </h1>

  }
}
export default Home;

import './App.css';
class App extends Component {
render() {
return (
<div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
 <h1 className="App-title">Welcome to React</h1>
  </header>
<p className="App-intro"> To get started, edit <code>src/App.js</code>  and save to reload. </p>
<Home/>
 </div> ); } } export default App;
