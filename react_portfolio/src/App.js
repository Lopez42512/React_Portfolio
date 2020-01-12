import React, {Component} from "react"
import Main from "./Main"
import Work from "./Work"
import Header from "./Header"

class App extends Component {
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

    render(){
        console.log(this.state.number)
        const page = this.state.number === 0 ? <Main /> : <Work />

        return(
            <div>
                <Header />
                <button onClick={this.handlesubmit} name="Main"  >Main</button>
                <button onClick={this.handlesubmit} name="Work" >Work</button>
                {page}
            </div>
        )
    }
}

export default App