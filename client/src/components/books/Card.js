import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="book-container" style={{ width: "18rem" }}>
        <img
          src={this.props.img}
          className="card-img-top"
          alt="Book Name"
        />
        <div className="card-body">
          <a href={"/books/"+this.props.bookId}>{this.props.bookName}</a>
          <br />
          <a href={"/authors/"+this.props.authorid}>By {this.props.authorName}</a>
        </div>
      </div>
    );
  }
}
