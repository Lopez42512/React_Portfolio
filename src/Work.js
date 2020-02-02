import React from "react";
import WorkContainer from "./Component/WorkContainer";

function Work() {
  return (
    <div>
      <WorkContainer
        photo={require("./photos/work/shout.png")}
        title="Shout!"
        summary= {`I collaborated on Shout to create a web application that allows the user
        to connect with friends and set up a night out. I worked on the  
        message board of Shout, and assisted in the managing of the API.`}
        buttonColor= "rgb(241, 49, 49)"

      />
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
