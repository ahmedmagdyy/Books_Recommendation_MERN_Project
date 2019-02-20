import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import TableComp from './components/table';
import AddItemComp from './components/AddItem';

// let categories  = [
// {"id":"1",
// "name":"Culture"},
// {"id":"2",
// "name":"Sport"},
// {"id":"3",
// "name":"Economics"},
// ];


class App extends Component {
  state = {
      activeTab: '1',
      categories : []
    };
  
  addItemList=(newCat)=>{
    console.log(newCat+"Add List");
    this.setState({categories: [...this.state.categories,newCat]});
  }
  deleteItemList=(id)=>{
    console.log(id+"Delete List");
    const newList = this.state.categories.filter( i => i.id !== parseInt(id) );
    this.setState(
      {categories: newList});
  }
        // headers: {
      //   'Content-Type': 'application/json'
      // },
      // // body: JSON.stringify({
      // //   Email: this.state.email,
      // //   Password: this.state.password,
      // // }),
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
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Moar Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <AddItemComp buttonLabel="+" submitBt="Add Category" addCat={this.addItemList} itemType="cat" title="Add Category" />
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
              <TableComp  deleteItem={this.deleteItemList} itemType="cat" rows={this.state.categories} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              {/* <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col> */}
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default App;
