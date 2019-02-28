import React, { Component } from 'react';
// import { TabContent, TabPane, Nav ,  Row, Col } from 'reactstrap';
// import classnames from 'classnames';
import TableComp from './TableComp';
// import AddItemComp from './AddItemComp';
import {CategoryContext} from '../contexts/CategoryContext';
// import {Tab , NavItem ,TabContainer,Container,Item, Nav ,Sonnet, Pane, Link,Content,NavLink , classnames , Row , Col}  from 'react-bootstrap/Tab'
import {Tab,Tabs,Nav,Col,Row} from 'react-bootstrap'
import {redirectTo,navigate} from "@reach/router"
const books=[{
    _id:"1",
    photo : "photo A",
    name : "BOOK A",
    author : "Authror A",
    avg_rate : "33",
    rating : "4",
    Shelve : "read"
}];

//img
const base64Flag = 'data:image/jpeg;base64,';

class UserPage extends Component {
  state = {
    //   activeTab: '1',
    //   photo: "photo A",
    //   name : "BOOK A",
    //   author : "Author A",
    //   avg_rate : "33" ,
    //   rating : "4",
    //   Shelve : "read"
    books : [books]
    };

   loadBook=()=>{
    fetch('http://localhost:5000/user', {
      method: 'GET'
    }).then((response) => response.json())
    .then((responseJson) => {
      this.setState(
        {books : responseJson});
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

//   loadAuth=()=>{
//     fetch('http://localhost:5000/authors', {
//       method: 'GET'
//     })
//     .then((res) => res.json())
//     .then((data) => {
//         data.map(item=>{
//           if(item.photo){
//             item.photo = base64Flag + this.arrayBufferToBase64(item.photo.data.data)
//           }
//         })
//         this.setState({authors:data})
//     })
//   }
   ////////
  componentWillMount(){
    
    //   this.loadBook();
//     this.loadCat();
//     this.loadAuth();
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const token = localStorage.getItem("jwttoken");
    console.log(token)
      if(token!== 'undefined'&&token!== null){
        
      }
      else {
        console.log("rediredt to /")
      window.location.href = "/";//navigate("/")
      return null;
      }
    return (
    //   <CategoryContext.Provider  value={
        // {
        //   books:this.state.books ,
        //   authors:this.state.authors,
        //   addItemList:this.addItemList ,
        //   getItemList:this.getItemList
        //   editItemList:this.editItemList
        // }
        //   } >
        // {/* 
        <div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                    {/* <Sonnet /> */}
                    ;lfkda;slkfsda;lsda
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    {/* <Sonnet /> */}
                    lfdjsalkfjsdlf;kjsfalkjas
                    </Tab.Pane>
            </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>

        </div> 
              );
  }
}

export default UserPage;