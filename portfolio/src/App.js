// App.jsx
 
import React, {Fragment, PureComponent} from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'; 
import Home from './Home.js'
import Experience from './Experience.js'
import Projects from './Projects.js';  
import About from './About.js'; 
import Resume from './Resume.js'
import JLogo from './images/logo.png'
import './App.css';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
  
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} />

        <header className="Nav-bar">
          <NavLink to="/home" className="Home-links"><a><img className="logo" src={JLogo} alt=""/> </a> </NavLink>

          <NavLink to="/resume" className="Nav-links" activeClassName="active">Resume</NavLink>s
          <NavLink to="/projects" className="Nav-links" activeClassName="active">Projects</NavLink>
          <NavLink to="/experience" className="Nav-links" activeClassName="active">Experience</NavLink>
          <NavLink to="/about" className="Nav-links" activeClassName="active">About</NavLink>
        </header>

      </div>
    </BrowserRouter>
  );
}
 
export default App;