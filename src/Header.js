import React from "react";
import Background from "./background.jpg";

function Header(props) {
  let page
  if (props.page === "Main"){
    page = <h2 className="helloName">Hello I'm Ismael Lopez</h2>
  } else if (props.page === "Work") {
    page = <h2 className="helloName">Work</h2>
  } else {
    page = <h2 className="helloName">Contact Me</h2>
  }

  let bottomPage 
  if (props.page === "Main"){
    bottomPage = <h2 className='helloTitle'>A Full-Stack Developer</h2>
  }
  return (
    <header className="header">
      <div className="backgroundImg" style={{ backgroundImage: `url(${Background})` }}></div>
      <div className="headerTopContainer">
        <img className="myFace" src={require("./image.jpg")} alt="not found" />
        <ul className="ulList">
          <li name="contact" onClick={props.handlesubmit}>
            Contact
          </li>
          <li src="work" onClick={props.handlesubmit}>
            Work
          </li>
          <li name="main" onClick={props.handlesubmit}>
            Main
          </li>
        </ul>
      </div>
      <div className="headerMidContainer">
          {page}
      </div>
      <div className="headerBottomContainer">
          {bottomPage}
      </div>
    </header>
  );
}

export default Header;

/* <div className="topHeaderContainer">
          </div>
          <div className="mainContainer">
            <div className="headerContainer">
              <h2 className="intro1">Hello I'm Ismael Lopez</h2>
            </div>
            <div className="imgContainer">
              <img src={require("./image.jpeg")} alt="not found" />
            </div>
            <div className="headerContainer">
              <h2 className="intro">A Front End React Developer</h2>
            </div>
          </div> */
