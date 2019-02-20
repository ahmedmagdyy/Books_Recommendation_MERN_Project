import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
// import {ModalComp } from 'ModalComp';
export default class AddItemComp extends React.Component {
  state = {
      modal: false,
      value: ''
    };

  toggle = ()=>{
    // console.log();
    this.setState(prevState => ({
      modal: !prevState.modal ,
      value: ''
    }));
  }

  handleValueChange = (event)=>{
    this.setState({value:event.target.value});
  }
  submitForm = (e)=> {
    e.preventDefault();
    fetch('http://localhost:5000/'+this.props.itemType, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
       body:  JSON.stringify({
        name: this.state.value
       })
    }).then((res) => res.json())
    .then((data) =>  this.props.addCat(data))
    .catch((err)=>console.log(err));
    this.toggle();
  };
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.submitForm}>
                <FormGroup>
                  <Input type="text" onChange={this.handleValueChange} value={this.state.value} />
                </FormGroup>
                <FormGroup>
                  <Button color="primary">{this.props.submitBt}</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
