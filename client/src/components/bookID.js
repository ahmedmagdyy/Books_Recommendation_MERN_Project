import React, { Component } from "react";
import { Media, Container } from "reactstrap";
import Foo from "./rating";
import Dropdownlist from "./dropdown";

class Book_ID extends Component {
  constructor(props) {
    super();
    this.state = {
      book: {
        bookId: 1,
        name: "Origin",
        author: "Dan Brown",
        category: "Suspense & Thriller",
        description:
          "Robert Langdon, Harvard professor of symbology and religious iconology, arrives at the ultramodern Guggenheim Museum Bilbao to attend a major announcement—the unveiling of a discovery that will change the face of science forever.",
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
                  width="100%"
                  width="100%"
                  src="https://images-na.ssl-images-amazon.com/images/I/51Z0WWdD7CL._SY498_BO1,204,203,200_.jpg"
                  alt="Dan Brown Origin Book"
                />
                <Dropdownlist />
                <div style={{ "margin-left": "45px" }}>
                  <Foo rating={this.state.rating} />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div
                className="book-description"
                style={{ "margin-top": "25px" }}
              >
                <Container>
                  <h2 className="display-3">{this.state.book.name}</h2>
                  <h2 className="display-8">
                    by{" "}
                    <a href="/author/:id" style={{ "text-decoration": "none" }}>
                      {this.state.book.author}
                    </a>
                  </h2>
                  <h2 className="display-8">
                    <a
                      href="/category/:id"
                      style={{ "text-decoration": "none" }}
                    >
                      {this.state.book.category}
                    </a>
                  </h2>
                  <Foo />
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
                  <p className="lead"> {this.state.book.description}</p>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Book_ID;
