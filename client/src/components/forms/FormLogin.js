import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import {currentUser} from '../../userInfo';
import { navigate } from "@reach/router"

export default class FormLogin extends Component {
  state = {
      email:'',
      password:''
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
    fetch('http://localhost:5000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
       body:  JSON.stringify({
        email: this.state.email,
        password : this.state.password
       })
    }).then((res) =>  res.json())
    .then((data) =>  {
      localStorage.setItem('jwttoken', data.token);
      currentUser.userData = data.user;
      currentUser.authenticated = true;
      navigate("/admin")
      console.log(data);
    })
    .catch((error) =>{
      alert("Wrong Password")
     console.log(error);
    });
  };

  render() {
    const {email,password} = this.state;
    return (
      <Container className="App">
        <h2>Sign In</h2>
        <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value= {email}
                onChange = {(event)=>{this.handleEmailChange(event)}}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                value= {password}
                onChange = {(event)=>{this.handlePasswordChange(event)}}
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
    }
  }
