import React from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom'
import Navbar from './Components/DisplayingChoicesComponents/Navbar';
import Home from './Components/ChoicesComponents/Home';
import Experience from './Components/ChoicesComponents/Experience';
import Education from './Components/ChoicesComponents/Education';
import Voluntery from './Components/ChoicesComponents/Voluntery';


function App() {
  return (
    <Router>
      <div className="App">

      <Navbar></Navbar>
      <Route exact path="/">
        <Home />
    </Route>
    <Route path="/experience">
       <Experience />
    </Route>
    <Route path="/education">
       <Education />
    </Route>
    <Route path="/voluntery">
       <Voluntery />
    </Route>
    </div>
    </Router>
  );
}

export default App;
