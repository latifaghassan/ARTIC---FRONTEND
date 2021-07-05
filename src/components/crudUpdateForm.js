import React, { Component } from "react";

export class crudUpdateForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.updateItem}>
          <input
            onChange={this.props.updateDescriptionState}
            type="text"
            value={this.props.description}
          />
          <input type="submit" value="Update Data" />
        </form>
      </div>
    );
  }
}

export default crudUpdateForm;
