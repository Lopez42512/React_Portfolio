import React, { Component } from "react";
import Main from "./Main";
import Work from "./Work";
import Header from "./Header"

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  handlesubmit = event => {
    event.preventDefault();
    console.log(event.target.innerText)
  };
  render() {
    console.log(this.state.number);
    const page = this.state.number === 0 ? <Main /> : <Work />;

    return (
      <div>
        <Header handlesubmit={this.handlesubmit}/>
        {page}
        <footer>
          <div className="fixed-bottom">
            <p className="text-center">CopyRight IEL</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App