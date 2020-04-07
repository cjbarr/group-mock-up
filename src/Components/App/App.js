import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Project from '../Project/Project'
import Nav from '../Nav/Nav';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
        <Route exact path="/" component={Home} />
        <Route path="/project" component={Project} />
      </Router>
    </div>
  );
}

export default App;
