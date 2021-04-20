import React from "react"
 
function Experience(props) {
  return (
<div className="App">
            <header className="App-header">
                <h1 className="App-header-text">Work Experience</h1>
            </header>
            <div className="App-body">
                <div>
                    <h2 className="Act-company">UC Davis</h2>
                    <h3 className="Act-title">Deep Learning Researcher</h3>
                    <p className="Act-desc">
                        Responsible for leading a research group in the College of Agriculture and Environmental Science which tested computer vision 
                        techniques to accurately predict tomatoe yields with drone imagery. Implemented SOTA techniques and adjusted our research plan to 
                        address issues that arose over a 5 year long research project.
                    </p>
                </div>
                <div>
                    <h2 className="Act-company">PlateIQ</h2>
                    <h3 className="Act-title">Software Engineer Intern</h3>
                    <p className="Act-desc">
                        <a href="https://www.plateiq.com/" style={{color: "grey"}}>PlateIQ</a> is a startup that has created a software platform that lets restaurants store and manage all their invoices 
                        and bills in the cloud, and monitor their P&L - down to the plate cost of every dish in their menu - in realtime. I
                        built Deep Neural Networks for invoice layout detection, OCR correction models, LSTM seq2seq models for spelling correction
                        and Convolutional Neural Networks for invoice field localization.
                    </p>
                </div>
                <div>
                    <h2 className="Act-company">TextRecruit</h2>
                    <h3 className="Act-title">AI Specialist Intern</h3>
                    <p className="Act-desc">
                        TextRecruit is a candidate engagement platform that leverages text, chat and AI to hire better people, faster. I 
                        worked as an AI Specialist Intern, building AI chatbots called Ari that the TextRecruit platform uses. Ari assists recruiters 
                        in announcing job openings, screening candidates, scheduling interviews, onboarding new employees and answering 
                        frequently asked HR questions. A majority of my time was spent building out this chatbot.
                    </p>
                </div>
            </div>
        </div>
  )
}
 
export default Experience;