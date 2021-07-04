
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/"></Route>
            {/*render our {homepage} component*/}
            <Route exact path="/favourite"></Route>
            {/*render our {favourtie} page component*/}
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
