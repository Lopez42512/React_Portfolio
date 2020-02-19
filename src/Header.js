import React from "react";
import Background from "./photos/background.jpg";
import { Switch, Route, Link } from "react-router-dom";

function Header() {
  
  return (
    <header className="header">
      <div
        className="backgroundImg"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <div className="headerTopContainer">
        <img
          className="myFace"
          src={require("./photos/image.jpg")}
          alt="not found"
        />
        <ul className="ulList">
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/">Main</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
          <div className="headerMidContainer"><h2 className="helloName">Ismael Lopez</h2></div>
          <div className="headerBottomContainer"><h2 className="helloTitle">Web Developer</h2></div>
        </Route>
        <Route path="/work">
          <h2 className="helloName">Projects</h2>
        </Route>
        <Route path="/contact">
          <h2 className="helloName">Contact Me</h2>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
