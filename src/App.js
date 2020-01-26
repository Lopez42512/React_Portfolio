import React, { Component } from "react";
import Main from "./Main";
import Work from "./Work";
import Header from "./Header"

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: "Main"
    };
  }

  handlesubmit = event => {
    event.preventDefault();
    console.log(event.target.innerText)
    switch (event.target.innerText) {
        case "Main":
            this.setState({page: "Main"});
            break;
        case "Work":
            this.setState({page: "Work"});
            break;
        case "Contact":
            this.setState({page: "Contact"})
            break;
        default:
            this.setState({page: "Main"});
    }
  };
  render() {
    let page
    // const page = this.state.page === "Main" ? <Main /> : <Work />;
    if (this.state.page === "Main"){
        page = <Main />
    } else if (this.state.page === "Work"){
        page = <Work />
    }

    return (
      <div>
        <Header page={this.state.page} handlesubmit={this.handlesubmit}/>
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