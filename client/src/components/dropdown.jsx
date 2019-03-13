import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import jwt_decode from "jwt-decode";
import {setCurrentUser,emptyCurrentUser,currentUser} from '../userInfo';

export default class Dropdownlist extends Component {
  addBook=(e)=>{
    console.log('http://localhost:5000/users/book/',this.props.bookID,currentUser.authenticated)
    if(currentUser.authenticated){
        fetch('http://localhost:5000/users/book/'+this.props.bookID, {
        method: 'POST',
        headers:{
          'authorization':localStorage.getItem('jwttoken'),
          'Content-Type': 'application/json'

        },
        body:JSON.stringify({
          book_status:e.target.innerHTML
         })
      })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
      })
    }
    console.log(e.target.innerHTML,currentUser.userData)
  }
  componentWillMount(){
    const token = localStorage.getItem("jwttoken");
    console.log(token);
    if(token!== 'undefined'&&token!== null){
      const decoded = jwt_decode(token);
      setCurrentUser(decoded,true);
      console.log(decoded);
    }
  }
  render() {
    return (
      <Dropdown
        style={{
          "margin-left": "60px",
          "margin-top": "10px",
          "margin-bottom": "20px",
        }}
      >
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Book Status
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as="button" onClick={this.addBook} >Read</Dropdown.Item>
          <Dropdown.Item as="button" onClick={this.addBook} >Want to Read</Dropdown.Item>
          <Dropdown.Item as="button" onClick={this.addBook} >Currnetly Reading</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
