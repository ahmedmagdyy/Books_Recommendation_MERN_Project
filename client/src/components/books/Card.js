import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="book-container" style={{ width: "18rem" }}>
        <img
          src="https://via.placeholder.com/300"
          className="card-img-top"
          alt="Book Name"
        />
        <div className="card-body">
          <a href="">{this.props.bookName}</a>
          <br />
          <a href="">By {this.props.authorName}</a>
        </div>
      </div>
    );
  }
}
