import React from "react"
import linkedin from './images/linkedin.jpg';
import github from './images/github.jpg';
import prof from './images/prof.jpg'
import './App.css';
 
function Home() {
  return (
    <div className="App">
        <h1 className="Home-name-intro">Hi, my name is</h1>
        <h2 className="Home-name">Jack Retterer.</h2>
        <h3 className="Home-name-statement">I build things.</h3>
        <div className="home-page-intro">
            <p>
                I am a recent college graduate from the University of California, 
                Davis with a degree in Computer Science and Engineering. Passionate about making things happen and building cool projects..
            </p>
        </div>
    </div>
  )
}
 
export default Home;