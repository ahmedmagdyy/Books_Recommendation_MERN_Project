import React, { Component } from "react";
import { Media, Container } from "reactstrap";
import Rating from "./rating";
import Dropdownlist from "./dropdown";

const base64Flag = 'data:image/jpeg;base64,';

class Book_ID extends Component {
    state = {
      books: {
        // bookId: 1,
        // name: "Origin",
        // author: "Dan Brown",
        // category: "Suspense & Thriller",
        // description:
        //   "Robert Langdon, Harvard professor of symbology and religious iconology, arrives at the ultramodern Guggenheim Museum Bilbao to attend a major announcement—the unveiling of a discovery that will change the face of science forever.",
        // rating: 4,
      }
  }
  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
    };
  loadBook=async ()=>{
    await fetch('http://localhost:5000/books/'+this.props.id, {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => {
        console.log("BOOK STATE NOW")
        console.log(data);
        data.photo = base64Flag + this.arrayBufferToBase64(data .photo.data.data);
        this.setState({books:data})

    })
  }
   componentWillMount(){
     this.loadBook().then(() => {
     console.log(this.state.books.author_id[0].first_name)
    });
  }
  render() {
    const author = this.state.books.author_id;
    const authorName =(author)?author[0].first_name + " " + author[0].last_name:""
    const aurthorId = (author)?"/authors/"+author[0]._id:"";
    const photo = this.state.books.photo;
    const cat = this.state.books.category_id;
    return (
      <div style={{ float: "left" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 ">
              <div className="Card" style={{ "margin-top": "50px" }}>
                <Media
                  width="100%"
                  width="100%"
                  src={photo}
                  alt="Dan Brown Origin Book"
                />
                <Dropdownlist />
                <div style={{ "margin-left": "45px" }}>
                  <Rating   />
                  {/* rating={this.state.rate} */}
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div
                className="book-description"
                style={{ "margin-top": "25px" }}
              >
                <Container>
                  <h2 className="display-3">{this.state.books.name}</h2>
                  <h2 className="display-8">
                    <a href={"/authors/"+(aurthorId)?aurthorId:"12"} style={{ "text-decoration": "none" }}>
                      {authorName}
                    </a>
                  </h2>
                  <h2 className="display-8">
                    <a
                      href="/category/:id1"
                      style={{ "text-decoration": "none" }}
                    >
                    {(cat)?cat[0].name:""}
                    </a>
                  </h2>
                  <Rating />
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
                  <p className="lead"> {this.state.books.description}</p>
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
