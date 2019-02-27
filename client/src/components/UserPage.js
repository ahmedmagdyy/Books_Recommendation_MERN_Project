import React, { Component } from 'react';
// import { TabContent, TabPane, Nav ,  Row, Col } from 'reactstrap';
// import classnames from 'classnames';
import BookTable from '../components/books/BookTable';
import {CategoryContext} from '../contexts/CategoryContext';
// import {Tab , NavItem ,TabContainer,Container,Item, Nav ,Sonnet, Pane, Link,Content,NavLink , classnames , Row , Col}  from 'react-bootstrap/Tab'
import {Tab,Tabs,Nav,Col,Row} from 'react-bootstrap'
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

  //  loadBook=()=>{
  //   fetch('http://localhost:5000/user', {
  //     method: 'GET'
  //   }).then((response) => response.json())
  //   .then((responseJson) => {
  //     this.setState(
  //       {books : responseJson});
  //   }).catch((error) =>{
  //    console.log(error);
  //   });
  //  }

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
    return (
        <div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">All</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Read</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Currently Reading</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Want To Read</Nav.Link>
                      </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                      <Tab.Pane eventKey="first">
                      {/* <Sonnet /> */}
                      <BookTable></BookTable>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      {/* <Sonnet /> */}
                      <BookTable></BookTable>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      {/* <Sonnet /> */}
                      <BookTable></BookTable>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                      {/* <Sonnet /> */}
                      <BookTable></BookTable>
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