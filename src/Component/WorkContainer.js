import React from "react";

function WorkContainer(props) {
  return (
    <div style={{ backgroundColor: "white" }} className="workContainer">
      <div style={{ backgroundColor: "" }} className="photoContainer">
        <div className="photoBorder">
          <img
            className="workPhoto"
            src={props.photo}
            alt="not found"
          />
        </div>
      </div>
      <br />
      <div className="titleContainer">
        <h2 className="workTitle">{props.title}</h2>
      </div>
      <div className="sumContainer">
        <div className="workSum">
          {props.summary}
        </div>
      </div>
      <div className="buttonContainer">
        <button style={{backgroundColor: props.buttonColor}} className="buttonWebsite">
          <a
            style={{ color: "white" }}
            href= {props.titleLink}
          >
            View {props.title}!
          </a>
        </button>
        <button style={{backgroundColor: props.buttonColor}} className="buttonWebsite">
          <a
            style={{ color: "white" }}
            href= {props.gitLink}
          >
            View Github!
          </a>
        </button>
      </div>
    </div>
  );
}

export default WorkContainer;
