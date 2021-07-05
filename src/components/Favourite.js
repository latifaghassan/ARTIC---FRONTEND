import React, { Component } from "react";
import ApiCrudData from "./ApiCrudData";
import axios from "axios";
import CrudUpdateForm from "./crudUpdateForm";
export class Favourite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: process.env.REACT_APP_SERVER_URL,
      apiCrudData: [],
      showCrudData: false,
      showAPIMessage: false,
      message: "",
      description: "",
      slugName: "",
      showUpdateForm: false,
    };
  }
  //---------------------------------------------------

  componentDidMount = async () => {
    const request = await axios(`${this.state.url}/art/favourite`);
    this.setState({
      apiCrudData: request.data,
      showCrudData: true,
    });
  };
  //---------------------------------------------------
  deleteItem = async (slug) => {
    const request = await axios.delete(
      `${this.state.url}/art/favourite/${slug}`
    );
    const newCrudData = this.state.apiCrudData.filter(
      (obj) => obj.slug !== slug
    );

    this.setState({
      apiCrudData: request.data,
    });
  };
  //---------------------------------------------------

  showUpdateForm = (desc, slug) => {
    this.setState({
      description: desc,
      slugName: slug,
      showUpdateForm: true,
    });
  };
  //---------------------------------------------------

  updateDescriptionState = (e) =>
    this.setState({ description: e.target.value });

  //---------------------------------------------------

  updateItem = async (e) => {
    e.preventDefault();
    const request = await axios.put(
      `${this.state.url}/art/favourite/${this.state.slugName}`,
      { description: this.state.description }
    );

    this.setState({
      apiCrudData: request.data,
    });
  };
  //---------------------------------------------------
  render() {
    return (
      <>
        {this.state.showAPIMessage && <h3>{this.state.message}</h3>}

        {this.state.showUpdateForm && (
          <CrudUpdateForm
            updateItem={this.updateItem}
            updateDescriptionState={this.updateDescriptionState}
            description={this.state.description}
          />
        )}
        {this.state.showCrudData && (
          <ApiCrudData
            apiCrudData={this.state.apiCrudData}
            deleteItem={this.deleteItem}
            showUpdateForm={this.showUpdateForm}
          />
        )}
      </>
    );
  }
}

export default Favourite;
