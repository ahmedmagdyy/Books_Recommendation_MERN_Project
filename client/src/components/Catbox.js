import React, { Component } from "react";
import { Link } from "@reach/router";
export default class Catbox extends Component {
  render() {
    return (
      <Link to={"/cat/" + this.props.categoryId}>
        <div className="col-sm-6 col-md-4 card card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
          <h3> {this.props.categoryName} </h3>
        </div>
      </Link>
    );
  }
}
