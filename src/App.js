import React, { Component } from "react";
import Main from "./Main";
import Work from "./Work";
import Header from "./Header"
import Footer from "./Footer"

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: "MAIN"
    };
  }

  handlesubmit = event => {
    event.preventDefault();
    console.log(event.target.innerText)
    switch (event.target.innerText) {
        case "MAIN":
            this.setState({page: "MAIN"});
            break;
        case "WORK":
            this.setState({page: "WORK"});
            break;
        case "CONTACT":
            this.setState({page: "CONTACT"})
            break;
        default:
            this.setState({page: "MAIN"});
    }
  };
  render() {
    let page
    // const page = this.state.page === "Main" ? <Main /> : <Work />;
    if (this.state.page === "MAIN"){
        page = <Main />
    } else if (this.state.page === "WORK"){
        page = <Work />
    }

    return (
      <div>
        <Header page={this.state.page} handlesubmit={this.handlesubmit}/>
        {page}
        <Footer />
      </div>
    );
  }
}

export default App