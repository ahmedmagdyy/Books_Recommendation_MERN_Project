import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import TableComp from './table';
import AddItemComp from './AddItem';
import {CategoryContext} from '../contexts/CategoryContext';



class AdminPanel extends Component {
  state = {
      activeTab: '1',
      categories : [],
      catCols : ["Name"]
    };
  
  addItemList=(newCat)=>{
    console.log(newCat+"Add List");
    this.setState({categories: [...this.state.categories,newCat]});
  }
  deleteItemList=(id)=>{
    console.log(id+"Delete List");
    const newList = this.state.categories.filter( i => i._id !== id );
    this.setState(
      {categories: newList});
  }
  editItemList=(editCat)=>{
    console.log("list EDITED");
    const newList = this.state.categories.map(i=>(i._id==editCat._id)?editCat:i);
    console.log(newList);
    this.setState(
      {categories: newList}
    );
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
        <AddItemComp  operation="Add" buttonColor="danger" buttonLabel="+" submitBt="Add Category" addCat={this.addItemList} itemType="cat" title="Add Category" />
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
              <TableComp  deleteItem={this.deleteItemList} itemType="cat" tab="Category" rows={this.state.categories} cols={this.state.catCols} />
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
      </CategoryContext.Provider>
    );
  }
}

export default AdminPanel;
