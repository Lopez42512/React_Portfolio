import React from "react";
import Main from "./Main";
import Work from "./Work";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <br />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
