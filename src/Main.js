import React from "react";

function Main() {
  return(
    <div className="introParagraph">
      <div className="introContainer">
        <div className="hiContainer">
          <h2 className="hi">Hi!</h2>
        </div>
        <div className="introSetUp">
          <div className="intro">
            I'm a full stack web developer based in Philadelphia, PA.
            <br />
            I'm a recent graduate of the UPenn Coding Bootcamp and <br />
            specialize in React and NodeJs.
          </div>
        </div>
      </div>
      <div className="break">
        - - - - - - - - - -
      </div>
      <div className="whatIDo">
        <div className="hiContainer1">
          <h2 className="hi1">What Can I Do?</h2>
        </div>
        <div className="webContainer">
          <div className="frontEnd">
            <h2 className="devel">Front-End Developer</h2>
            <div className='devel1'>
              {/* I like to code in React so I can create <br />stunning and dynamic web pages. */}
              I combine my knowledge of React, Javascript and Css to <br />create stunning and dynamic websites.
            </div>
          </div>
          <div className="backEnd">
            <h2 className="devel">Back-End Developer</h2>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Main;
