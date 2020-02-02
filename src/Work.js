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
        titleLink= "https://lopez42512.github.io/Shout/index.html"
        gitLink= "https://github.com/Lopez42512/Shout"
        buttonColor= "rgb(241, 49, 49)"

      />
      <br />
      <WorkContainer
        photo={require("./photos/work/statue.png")}
        title="Statue Quest!"
        summary= {`Statue Quest is a scavenger hunt with the many statue in Philadelphia.
            I worked on the camera and google map api that compared the user's and statue location, 
            and assisted in the development of the back-end`
        }
        titleLink= "https://statue-quest.herokuapp.com"
        gitLink= "https://github.com/zahollingsworth1/StatueQuest-"
        buttonColor= "rgb(66, 61, 61)"

      />
    </div>
  );
}

export default Work;
