import React from "react";
import Background from "./background.jpg";

function Header(props) {
  return (
    <header style={{ backgroundImage: `url(${Background})` }} className="header">
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
