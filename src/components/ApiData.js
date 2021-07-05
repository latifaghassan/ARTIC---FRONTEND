import React, { Component } from "react";

export class ApiData extends Component {
  render() {
    return this.props.apiData.map((obj, idx) => {
      return (
        <div key={idx}>
          <h2>{obj.title}</h2>
          <h3>{obj.artist_name}</h3>
          <img src={obj.thumbnail} alt="" />
          <p>{obj.description}</p>
          {/* <form onSubmit={this.props.submitForm}>
            <input type="hidden" name="title" value={obj.title} />
            <input type="hidden" value={obj.artist_name} />
            <input type="hidden" value={obj.thumbnail} />
            <input type="hidden" value={obj.description} />
            <input type="submit" value="Form Button" />
          </form> */}
          <button onClick={(e) => this.props.favouriteItem(obj)}>
            Add to favourite
          </button>
        </div>
      );
    });
  }
}

export default ApiData;
