import React from "react"
import linkedin from './images/linkedin.jpg';
import PSCC from './images/pan_smacking_cookies.jpg'
import github from './images/github.jpg';
import prof from './images/prof.jpg'
import Thumbnail from './Thumbnail.js';
 
function About(props) {
  return (
    <div className="App">
      <h1 className="About-Me-header">About Me</h1>
        <div class="group">
          <div className="About-Me-page-intro">
              <p>
                  My name is Jack Retterer. I am recent college graduate from the University of California, 
                  Davis with a degree in Computer Science and Engineering. I am experienced and passionate about artificial intelligence applications in space, agriculture, finance, and medicine.
              </p>
              <p>
                  Here are a few of the technologies I have been using
              </p>
              <ul class="common-list">
                <li class="common-list-item">Python</li>
                <li class="common-list-item">Java</li>
                <li class="common-list-item">Javascript</li>  
                <li class="common-list-item">React</li>
                <li class="common-list-item">SQL</li>
                <li class="common-list-item">C++</li>  
                <li class="common-list-item">Git</li>
                <li class="common-list-item">AWS</li> 
              </ul>
              <p>
                  My interests include Space, Finance, Skiing, and Perfecting the Chocolate Chip Cookies
              </p>
          </div>
          <div>
            <img src={prof} alt="" className="About-Me-prof" />
          </div>
        </div>

        <div style={{width: "100%", height: "86px"}}></div>
        <footer className="App-footer">
            <a href="https://www.linkedin.com/in/jackretterer-csengineer/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} className="Social-logo" alt="Linkedin" />
            </a>
            <a href="https://github.com/jackretterer" target="_blank" rel="noopener noreferrer">
                <img src={github} className="Social-logo" alt="GitHub" />
            </a>
        </footer>
    </div>
  )
}
 
export default About;