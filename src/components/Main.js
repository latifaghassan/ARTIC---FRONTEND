import axios from "axios";
import React, { Component } from "react";
import ApiData from "./ApiData";

export class Main extends Component {
  constructor(props) {
    super(props);
    //-----------------------------------------------------

    this.state = {
      url: process.env.REACT_APP_SERVER_URL,
      apiData: [],
      showData: false,
      showAPIMessage: false,
      message: "",
    };
  }
  //-----------------------------------------------------
  favouriteItem = async (dataObj) => {
    // console.log(dataObj);
    const postRequest = await axios.post(
      `${this.state.url}/art/favourite`, // this is our server endpoint for creating the data
      dataObj // this is our request body
    );
    this.setState({
      message: postRequest.data,
      showAPIMessage: true,
    });
  };

  //-----------------------------------------------------

  componentDidMount = async () => {
    const request = await axios.get(`${this.state.url}/art`);
    this.setState({
      apiData: request.data,
      showData: true,
    });
  };
  //-----------------------------------------------------

  render() {
    return (
      <>
        {this.state.showAPIMessage && <h3>{this.state.message}</h3>}

        {this.state.showData && (
          <ApiData
            apiData={this.state.apiData}
            favouriteItem={this.favouriteItem}
          />
        )}
      </>
    );
  }
}

export default Main;
