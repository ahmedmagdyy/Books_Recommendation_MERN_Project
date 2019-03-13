import React, { Component } from "react";
import CategoryBooks from "./Info";
import Pagination from "../Pagination";


const base64Flag = 'data:image/jpeg;base64,';

export default class BooksPage extends Component {
  state = { currentBooks: [], categoryBooks: [] };

  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
    };
  loadBook = async()=>{
  
  }
  componentWillMount() {
    const cat = (this.props.id)?'category/'+(this.props.id):'';
   fetch('http://localhost:5000/books/'+cat, {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => {
        console.log("BOOK STATE NOW")
        console.log('Data from DidMount:',data);
        if(data.photo)
          data.photo = base64Flag + this.arrayBufferToBase64(data.photo.data.data);        
          this.setState({categoryBooks:data})
          const currentBooks = this.state.categoryBooks.slice(0, 3);
          this.setState({ currentBooks });
    })
   
    console.log('Stae: ',this.state.currentBooks);
    console.log('Stae: ',this.state.categoryBooks);
  }

  onPageChanged = data => {
    const { categoryBooks } = this.state;
    const { currentPage, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentBooks = categoryBooks.slice(offset, offset + pageLimit);
    this.setState({ currentBooks });
  };

  render() {
    const { categoryBooks } = this.state;
    const totalBooks = categoryBooks.length;
    console.log(categoryBooks);
    // console.log("TOTAL BOOK"+ totalBooks)
    const currentBooks = this.state.currentBooks;
    console.log("CURRENT BOOKS")
    console.log(this.state.currentBooks.length);
    let categoryName='';
    if(totalBooks > 0 && this.props.id)
      categoryName = (categoryBooks[0].category_id)?categoryBooks[0].category_id[0].name:'';
    console.log("CatName",categoryName)
    return (
       (!currentBooks=== undefined || currentBooks.length == 0)?null:
      <div style={{ textAlign: "center" }}>
        <h1>{categoryName}</h1>
        <CategoryBooks books={currentBooks} />
        <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
          <div className="d-flex flex-row py-4 align-items-center">
            <Pagination
              totalRecords={totalBooks}
              pageLimit={5}
              pageNeighbours={1}
              onPageChanged={ this.onPageChanged}
            />
          </div>
        </div>
      </div>
    );
  }
}
