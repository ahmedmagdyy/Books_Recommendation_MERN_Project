import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import TableComp from './TableComp';
import AddItemComp from './AddItemComp';
import {CategoryContext} from '../contexts/CategoryContext';


const books=[{
    _id:"1",
    photo: "photo A",
    name : "BOOK A",
    category : "Cat A",
    author : "Authror A"}];
const author=[{
    _id:"1",
    photo: "photo A",
    firstName : "firstName A",
    lastName : "lastName A",
    dateOfBirth : "dateOfBirth A"}];
class AdminPanel extends Component {
  state = {
      activeTab: '1',
      categories : [],
      catCols : ["Name"],
      books : books,
      bookCols : ["Photo","Name","Category","Author"],
      author : author,
      authorCols : ["Photo","firstName","lastName","dateOfBirth"],
    };
  
  addItemList=(newCat,type)=>{
    console.log(newCat+"Add List");
    switch(type) {
      case "Category":
        this.setState({categories: [...this.state.categories,newCat]});
        break;
      case "Book":
        this.setState({books: [...this.state.books,newCat]});
        break;
      default:
        this.setState({authors: [...this.state.books,newCat]});
    }
    
  }
  deleteItemList=(id,type)=>{
    console.log(id+"Delete List");
    let newList;
    switch(type) {
      case "Category":
        newList = this.state.categories.filter( i => i._id !== id );
        this.setState({categories: newList});
        break;
      case "Book":
        newList = this.state.books.filter( i => i._id !== id );
        this.setState({books: newList});
        break;
      default:
        newList = this.state.authors.filter( i => i._id !== id );
        this.setState({authors: newList});
    }

    
  }
  editItemList=(editedItem,type)=>{
    console.log("list EDITED");
    let newList;
    switch(type) {
      case "Category":
        newList = this.state.categories.map(i=>(i._id===editedItem._id)?editedItem:i);
        this.setState({categories: newList});
        break;
      case "Book":
        newList = this.state.books.map(i=>(i._id===editedItem._id)?editedItem:i);
        this.setState({books: newList});
        break;
      default:
        newList = this.state.authors.map(i=>(i._id===editedItem._id)?editedItem:i);
        this.setState({authors: newList});
    }
    
  }
   
  componentWillMount(){
    fetch('http://localhost:5000/cat', {
      method: 'GET'
    }).then((response) => response.json())
    .then((responseJson) => {
      this.setState(
        {categories : responseJson});
    }).catch((error) =>{
     console.log(error);
    });
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <CategoryContext.Provider  value={
        {categories:this.state.categories ,
          addItemList:this.addItemList ,
          deleteItemList:this.deleteItemList,
          editItemList:this.editItemList
        }
          } >
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Categories
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Books
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Author
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
            <Col sm="11">
              <TableComp  deleteItem={this.deleteItemList} itemType="cat" tab="Category" rows={this.state.categories} cols={this.state.catCols} />
            </Col>
            <Col sm="1">
             <AddItemComp  operation="Add" buttonColor="danger" buttonLabel="+" submitBt="Add Category" addCat={this.addItemList} itemType="cat" title="Add Category" />
            </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="11">
                <TableComp  deleteItem={this.deleteItemList} itemType="books" tab="Book" rows={this.state.books} cols={this.state.bookCols} />
              </Col>
              <Col sm="1">
             <AddItemComp  operation="Add" buttonColor="danger" buttonLabel="+" submitBt="Add Book" addCat={this.addItemList} itemType="book" title="Add Book" />
            </Col>
            </Row>
          </TabPane>
        <TabPane tabId="3">
            <Row>
              <Col sm="11">
                <TableComp  deleteItem={this.deleteItemList} itemType="books" tab="Book" rows={this.state.author} cols={this.state.authorCols} />
              </Col>
              <Col sm="1">
             <AddItemComp  operation="Add" buttonColor="danger" buttonLabel="+" submitBt="Add Author" addCat={this.addItemList} itemType="author" title="Add Author" />
            </Col>
            </Row>
          </TabPane>
        </TabContent>
      </CategoryContext.Provider>
    );
  }
}

export default AdminPanel;
