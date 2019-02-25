import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import TableComp from './TableComp';
import AddItemComp from './AddItemComp';
import {CategoryContext} from '../contexts/CategoryContext';


const base64Flag = 'data:image/jpeg;base64,';
class AdminPanel extends Component {
  state = {
      activeTab: '1',
      categories : [],
      catCols : ["name"],
      books : [],
      bookCols : ["photo","name","author_name","category_name"],
      authors : [],
      authorCols : ["photo","first_name","last_name","birth_date"],
    };
  addItemList=(newItem,type)=>{
    if(newItem.photo){
      newItem.photo = base64Flag + this.arrayBufferToBase64(newItem.photo.data.data)
    }
    console.log("Add List")
    console.log(newItem);
    switch(type) {
      case "Category":
        this.setState({categories: [...this.state.categories,newItem]});
        break;
      case "Book":
        this.setState({books: [...this.state.books,newItem]});
        break;
      default:
        this.setState({authors: [...this.state.authors,newItem]});
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
    console.log(editedItem);
    let newList;
    switch(type) {
      case "Category":
        newList = this.state.categories.map(i=>(i._id===editedItem._id)?editedItem:i);
        this.setState({categories: newList});
        break;
      case "Book":
        newList = this.state.books.map(i=>{
          if(i._id===editedItem._id){
            if(editedItem.photo.data)
              editedItem.photo = base64Flag + this.arrayBufferToBase64(editedItem.photo.data.data);
            else if(i.photo)
              editedItem.photo = i.photo;
            return editedItem;
          }
          return i;
          });
        this.setState({books: newList});
        break;
      default:
        newList = this.state.authors.map(i=>{
          // console.log(i._id+"-------------"+editedItem._id);
          if(i._id===editedItem._id){
            if(editedItem.photo.data)
              editedItem.photo = base64Flag + this.arrayBufferToBase64(editedItem.photo.data.data);
            else if(i.photo)
              editedItem.photo = i.photo;
            return editedItem;
          }
          return i;
          });
        this.setState({authors: newList});
    }
    
  }
   loadCat=()=>{
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

//    this.state = {
//     img: ''
// };
// };
  arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  return window.btoa(binary);
  };

  loadAuth=()=>{
    fetch('http://localhost:5000/authors', {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => {
        data.map(item=>{
          if(item.photo){
            item.photo = base64Flag + this.arrayBufferToBase64(item.photo.data.data)
          }
        })
        this.setState({authors:data})
    })
  }
   ////////

   
   loadBook=()=>{
    fetch('http://localhost:5000/books', {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => {
        data.map(item=>{
          if(item.photo){
            item.photo = base64Flag + this.arrayBufferToBase64(item.photo.data.data)
          }
        })
        console.log("BOOK STATE NOW")
        console.log(data);
        this.setState({books:data})

    })
  }
  componentWillMount(){
    this.loadCat();
    this.loadAuth();
    this.loadBook();
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
        {
          categories:this.state.categories ,
          authors:this.state.authors,
          books:this.state.books,
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
             <AddItemComp  operation="Add" buttonColor="danger" buttonLabel="+" submitBt="Add Category" itemType="cat" title="Add Category" />
            </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="11">
                <TableComp  deleteItem={this.deleteItemList} itemType="books" tab="Book" rows={this.state.books} cols={this.state.bookCols} />
              </Col>
              <Col sm="1">
             <AddItemComp  operation="Add" buttonColor="danger" buttonLabel="+" submitBt="Add Book" itemType="books" title="Add Book" />
            </Col>
            </Row>
          </TabPane>
        <TabPane tabId="3">
            <Row>
              <Col sm="11">
                <TableComp   deleteItem={this.deleteItemList} itemType="authors" tab="Author" rows={this.state.authors} cols={this.state.authorCols} />
              </Col>
              <Col sm="1">
             <AddItemComp  operation="Add" buttonColor="danger" buttonLabel="+" submitBt="Add Author"  itemType="authors" title="Add Author" />
            </Col>
            </Row>
          </TabPane>
        </TabContent>
      </CategoryContext.Provider>
    );
  }
}

export default AdminPanel;
