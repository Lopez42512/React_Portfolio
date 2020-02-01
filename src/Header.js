import React from "react";
import Background from "./photos/background.jpg";

function Header(props) {
  let page
  if (props.page === "MAIN"){
    page = <h2 className="helloName">Ismael Lopez</h2>
  } else if (props.page === "WORK") {
    page = <h2 className="helloName">Projects</h2>
  } else {
    page = <h2 className="helloName">Contact Me</h2>
  }
  
  let bottomPage 
  if (props.page === "MAIN"){
    bottomPage = <h2 className='helloTitle'>Web Developer</h2>
  }
  return (
    <header className="header">
      <div className="backgroundImg" style={{ backgroundImage: `url(${Background})` }}></div>
      <div className="headerTopContainer">
        <img className="myFace" src={require("./photos/image.jpg")} alt="not found" />
        <ul className="ulList">
          <li  onClick={props.handlesubmit}>
            CONTACT
          </li>
          <li onClick={props.handlesubmit}>
            WORK
          </li>
          <li  onClick={props.handlesubmit}>
            MAIN
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


