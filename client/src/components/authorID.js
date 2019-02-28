import React, { Component } from "react";
import { Media, Container } from "reactstrap";
class AuthorBooks extends Component {
  constructor(props) {
    super();
    this.state = {
      author: {
        bookName: "origin",
        authorId: 1,
        name: "Dan Brown",
        bdate: "15/06/1980",
        description:
          "Daniel Gerhard Brown is an American author most well known for his thriller novels, including the Robert Langdon stories, Angels & Demons, The Da Vinci Code, The Lost Symbol, Inferno and Origin",
      },
    };
  }

  render() {
    return (
      <div style={{ float: "left" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 ">
              <div className="Card" style={{ "margin-top": "50px" }}>
                <Media
                  src="http://danbrown.com/wp-content/themes/danbrown/images/db/slideshow/author/db.courter.06.jpg"
                  alt="Dan Brown photo"
                />
              </div>
            </div>
            <div className="col-md-9">
              <div
                className="book-description"
                style={{ "margin-top": "25px" }}
              >
                <Container>
                  <h2 className="display-3">{this.state.author.name}</h2>
                  <h2>{this.state.author.bdate}</h2>
                </Container>
                <Container
                  style={{
                    borderStyle: "groove",
                    borderRadius: "15px",
                    height: "50%",
                    "margin-top": "10px",
                  }}
                >
                  <h4 className="display-8">Description</h4>
                  <p className="lead"> {this.state.author.description}</p>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorBooks;
