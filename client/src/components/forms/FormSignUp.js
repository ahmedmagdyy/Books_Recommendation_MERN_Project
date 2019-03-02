import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import {currentUser} from '../../userInfo';
import { navigate } from "@reach/router"

export default class FormSignUp extends Component {
  state = {
    first_name: '',
    last_name: '',
    user_name: '',
    email: '',
    password: '',
  };
  handleFirstNameChange = event =>{
    this.setState(
      {first_name:event.target.value}
    )
  };
  handleLastNameChange = event =>{
    this.setState(
      {last_name:event.target.value}
    )
  };
  handleUserNameChange = event =>{
    this.setState(
      {user_name:event.target.value}
    )
  };
  handleEmailChange = event =>{
    this.setState(
      {email:event.target.value}
    )
  };
  handlePasswordChange = event =>{
    this.setState(
      {password:event.target.value}
    )
  };
  submitForm(e) {
    e.preventDefault();
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
       body:  JSON.stringify({
        email: this.state.email,
        password : this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        user_name: this.state.user_name
       })
    }).then((res) =>  res.json())
    .then((data) =>  {
      localStorage.setItem('jwttoken', data.token);
      currentUser.userData = data.user;
      currentUser.authenticated = true;
      navigate("/user")
      console.log(data);
    })
    .catch((error) =>{
     console.log(error);
    });
  };

  render() {
    return (
      <Container className="App">
        <h2>Sign Up</h2>
        <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
          <Col>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="text"
                name="first_name"
                value= {this.state.first_name}
                onChange = {(event)=>{this.handleFirstNameChange(event)}}
              />
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="text"
                name="last_name"
                value= {this.state.last_name}
                onChange = {(event)=>{this.handleLastNameChange(event)}}
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value= {this.state.email}
                onChange = {(event)=>{this.handleEmailChange(event)}}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                value= {this.state.password}
                onChange = {(event)=>{this.handlePasswordChange(event)}}
              />
            </FormGroup>
          </Col>
          <Button>SignUp</Button>
        </Form>
      </Container>
    );
    }
  }
