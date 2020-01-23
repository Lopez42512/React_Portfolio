import React, { Component } from "react";
import Main from "./Main"
import Work from "./Work"

class Header extends Component {

    constructor(){
        super()
        this.state = {
            number: 0
        }
    }

    handlesubmit = (event) => {
        event.preventDefault()
        console.log("hello")
        const eventTarget = event.target.name
        console.log(eventTarget)
        eventTarget === "Main" ? this.setState({number: 0}) : this.setState({number:1})
    }
  render() {
    
        console.log(this.state.number)
        const page = this.state.number === 0 ? <Main /> : <Work />

    return (
      <div>
        <header>
          <nav className="navbar fixed-top navbar-light bg-light">
            <h1 className="navbar-brand">Ismael Lopez</h1>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <button className="nav-link active" onClick={this.handlesubmit} name="Main">Main</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={this.handlesubmit} name="Project">Projects</button>
              </li>
              <li className="nav-item">
                <button className="nav-link">Contact</button>
              </li>
            </ul>
          </nav>
        </header>
        <br />
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

export default Header;





   
