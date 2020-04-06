import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Project from './Components/Project/Project'

function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path="/" component={Home} />
        <Route path="/project" component={Project} />

      </Router> 

    </div>
  );
}

export default App;
