import React, { Component } from "react";
import Card from "./Card";


const base64Flag = 'data:image/jpeg;base64,';
export default class CategoryBooks extends Component {
  
  state={
    books:[]
  }
  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
    }
    componentWillReceiveProps(nextProps){
        this.setState({
          books:nextProps.books
        })
    }

  render() {
    // console.log("Categorybook");
    // console.log(this.props.books);
    // const author = this.props.books.author_id;
    // console.log("Print Author")
    // const authorName =(author)?author[0].first_name + " " + author[0].last_name:""
    // console.log(authorName)
    // const aurthorId = (author)?"/authors/"+author[0]._id:"";
    // const photo = this.state.books.photo;
    // const cat = this.state.books.category_id;
    return (
      <div className="cards_container">
        {this.props.books.map(book => {
          console.log("Categorybook");
          const author = book.author_id;
          const authorName =(author)?author[0].first_name + " " + author[0].last_name:""
          const photo = (book.photo)?base64Flag+this.arrayBufferToBase64(book.photo.data.data):""
          return <Card bookName={book.name} img={photo} authorName={authorName} />;
        })}
      </div>
    );
  }
}
