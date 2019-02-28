import React, { Component } from "react";

export default class Catbox extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4 card card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
        <a href=""> {this.props.categoryName} </a>
      </div>
    );
  }
}
