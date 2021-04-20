import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import cirilla from "./images/c.jpg"
import resume from "./UserGuide.pdf"
import './App.css';
 
function Projects(props) {
  return (
<div className="App">
            <header className="App-header">
                <h1 className="App-header-text">Projects and Clubs</h1>
            </header>
            <div className="App-body">
                <div>
                    <h2 className="Act-company">BackThisBet</h2>
                    <h3 className="Act-title">Software Engineer / Co-Founder</h3>
                    <div>
                        <p className="Act-desc">
                            BackThisBet is a sports analytics and betting protection company. I helped build the backend with Java, Springboot and MySQL. I also built an injury prediction model for professional athletes.
                        </p>
                        <p className="Act-desc">
                            The company website is <a href="https://www.BackThisBet.com/" style={{color: "grey"}}>www.backthisbet.com</a>
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="Act-company">Bike Buddy</h2>
                    <h3 className="Act-title">Software Engineer / Electrical Engineer</h3>
                    <div>
                        <p className="Act-desc">
                            UC Davis is famous for its cows and bikes. Everyone bikes around town and campus. 
                            Unforunately, as a result, bike theft is a prevalent and costly issue for most riders.
                            A few friends and I designed a hidden bike alarm that goes off when the bike is in 
                            unforseen motion. I helped write the IOS and android app as well as configure the device
                            from all the components. Here is an in depth  <a href={resume}>User Guide</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}
 
export default Projects;