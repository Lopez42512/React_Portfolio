import React from "react";

function Work() {
  return (
    <div>
      <div style={{ backgroundColor: "white" }} className="workContainer">
        <div style={{ backgroundColor: "" }} className="photoContainer">
          <div className="photoBorder">
            <img
              className="workPhoto"
              src={require("./photos/work/shout.png")}
              alt="not found"
            />
          </div>
        </div>
        <br />
        <div className="titleContainer">
            <h2 className="workTitle">Shout!</h2>
        </div>
        <div className="sumContainer">
            <div className="workSum">
                I collaborated on Shout to create a web application that allows the user <br />
                to connect with friends and set up a night out. I worked on the <br /> 
                message board of Shout, and assisted in the managing of the API.
            </div>
        </div>
        <div className="buttonContainer">
            <button  className="buttonWebsite">
                <a style={{color: "white"}} href="https://lopez42512.github.io/Shout/index.html">
                    View Shout!
                </a>
            </button>
            <button  className="buttonWebsite">
                <a style={{color: "white"}} href="https://github.com/Lopez42512/Shout">
                    View Github!
                </a>
            </button>
        </div>
      </div>
      <div style={{ backgroundColor: "red" }} className="workContainer">
        <div
          style={{ backgroundColor: "green" }}
          className="photoContainer"
        ></div>
      </div>
    </div>
  );
}

export default Work;
