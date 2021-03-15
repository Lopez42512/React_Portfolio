import React from "react";
import WorkContainer from "./Component/WorkContainer";

function Work() {
  return (
    <div>
      <WorkContainer
        photo={require("./photos/work/adopt.png")}
        title="Adopt"
        summary={`Adopt is a website I created to help animal get adopted. The user is able to search for Cats and Dogs in their area and get a list of animals that are avaliable for adoption near them.`}
        titleLink="https://nameless-basin-30251.herokuapp.com/"
        gitLink="https://github.com/Lopez42512/AdoptAPet"
        buttonColor="#76ead7"
      />
      <div className="break">- - - - - - - - - -</div>
      <br />
      <WorkContainer
        photo={require("./photos/work/shout.png")}
        title="Shout!"
        summary={`I collaborated on Shout to create a web application that allows the user
        to connect with friends and set up a night out. I worked on the  
        message board of Shout, and assisted in the managing of the API.`}
        titleLink="https://lopez42512.github.io/Shout/index.html"
        gitLink="https://github.com/Lopez42512/Shout"
        buttonColor="rgb(241, 49, 49)"
      />
      <div className="break">- - - - - - - - - -</div>
      <br />
      <WorkContainer
        photo={require("./photos/work/pokedex.png")}
        title="PokeDex!"
        sizeFont="280%"
        summary={`Lookup all your favorite Pokemon. Each pokemon is sorted by their pokedex which can be explored to discover all the pokemon from that region. The pokemon can also be selected and have their stats and stories displayed.`}
        titleLink="https://mighty-scrubland-54058.herokuapp.com/"
        gitLink="https://github.com/Lopez42512/PokeDex"
        buttonColor="red"
      />
      <div className="break">- - - - - - - - - -</div>
      <br />
      <WorkContainer
        photo={require("./photos/work/memeGen.png")}
        title="Meme Generator!"
        sizeFont="280%"
        summary={`Meme Generator is a React app that allows the user to create their own memes.
        The user select which meme they would like to use,
        types out text and drag it to where they seem fit.`}
        titleLink="https://memegenerator-fd459.firebaseapp.com"
        gitLink="https://github.com/Lopez42512/ReactMemeGenerator"
        buttonColor="rgb(161, 120, 165)"
      />
      <div className="break">- - - - - - - - - -</div>
      <br />
      <WorkContainer
        photo={require("./photos/work/statue.png")}
        title="Statue Quest!"
        summary={`Statue Quest is a scavenger hunt with the many statue in Philadelphia.
            I worked on the camera and google map api that compared the user's and statue location, 
            and assisted in the development of the back-end`}
        titleLink="https://statue-quest.herokuapp.com"
        gitLink="https://github.com/zahollingsworth1/StatueQuest-"
        buttonColor="rgb(66, 61, 61)"
      />
      <br />
      <WorkContainer
        photo={require("./photos/work/typingGame.png")}
        title="Typing Game"
        summary={"Test how fast you can type with this game built with React"}
        titleLink="https://typinggame-6cf9a.firebaseapp.com"
        gitLink="https://github.com/Lopez42512/TypingGame"
        buttonColor="green"
      />
    </div>
  );
}

export default Work;
