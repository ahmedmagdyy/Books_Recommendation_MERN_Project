import React from 'react';
import {Collapse , Navbar ,Button, NavbarToggler , NavbarBrand , Nav , Col} from 'reactstrap';
import {NavItem , NavLink } from 'reactstrap';
import Popular from './Popular';
import FormLogin from './forms/FormLogin';
import FormSignUp from './forms/FormSignUp';
import {currentUser,setCurrentUser,emptyCurrentUser} from '../userInfo';
import jwt_decode from "jwt-decode";
import UserPage from './UserPage';
import { redirectTo, navigate } from "@reach/router"
export default class Home extends React.Component {
  state = {
      isOpen: false,
      books:[],
      authors:[],
      categories:[]
    };
  toggle=()=> {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  loadCat=()=>{
    fetch('http://localhost:5000/cat/pop', {
      method: 'GET'
    }).then((response) => response.json())
    .then((responseJson) => {
      this.setState(
        {categories : responseJson});
    }).catch((error) =>{
     console.log(error);
    });
   }

  loadAuth=()=>{
    fetch('http://localhost:5000/authors/pop', {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
        this.setState({authors:data})
    })
  }
  
   loadBook=()=>{
    fetch('http://localhost:5000/books/pop', {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => {
        console.log("BOOK STATE NOW")
        console.log(data);
        this.setState({books:data})
    })
  }
  componentWillMount(){
        this.loadAuth();
        this.loadBook();
        this.loadCat();

  }
  // signOut=()=>{
  //   localStorage.removeItem("jwttoken");
  //   emptyCurrentUser();
  //   navigate("/")
  // }
  render() {
    const token = localStorage.getItem("jwttoken");
    console.log(token)
      if(token!== 'undefined'&&token!== null){
        console.log("HELLO");
        const decoded = jwt_decode(token);
        setCurrentUser(decoded,true);
        if(currentUser.userData.isAdmin)
          window.location.href = "/admin"
        else window.location.href = "/user"///navigate("/user")
        return null;
      }
      
    return (
      // (currentUser.authenticated)?<UserPage />:
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
          <img width="35%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>              
            </Nav>
          </Collapse>
          {/* <Button onClick={this.signOut}>Log Out</Button> */}
        </Navbar>
        <div sm="12" className="clearfix">
          <Col sm="5"  className="float-left" >
            <Col sm="6" className="float-right">
              <Popular type="authors" rows={this.state.authors} title="Popular Authors"></Popular>
            </Col>
            <Col sm="6" className="float-right">
              <Popular  type="books" rows={this.state.books} title="Popular Books"></Popular>
            </Col>
            <Col sm="6" className="float-right">
              <Popular type="cat" rows={this.state.categories}  title="Popular Categories"></Popular>
            </Col>
          </Col>
          <Col sm="7" className="float-right" >
              <Col sm="6" className="float-right">
                <FormSignUp />
              </Col>
              <Col sm="6" className="float-right">
                <FormLogin />
              </Col>
          </Col>
        </div>
        <Nav className="clearfix">
                <NavItem>
                    <NavLink href="/logo">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">About Us</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Categories</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Authors</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Terms & Conditions</NavLink>
                </NavItem>
            </Nav>
      </div>
    );
  }
}