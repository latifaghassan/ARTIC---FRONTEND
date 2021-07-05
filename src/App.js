import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Favourite from "./components/Favourite";

export class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            {/*render our {homepage} component*/}
            <Route exact path="/favourite">
              {" "}
              <Favourite />
            </Route>

            {/*render our {favourtie} page component*/}
          </Switch>

          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;

//imrr
