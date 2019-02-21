import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
// import {ModalComp } from 'ModalComp';
export default class AddItemComp extends React.Component {
  state = {
      modal: false
    };

  toggle = ()=>{
    this.setState(prevState => ({
      modal: !prevState.modal ,
      value: ''
    }));
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            {this.props.children}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
