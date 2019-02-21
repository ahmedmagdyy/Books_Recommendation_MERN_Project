import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FaEdit } from 'react-icons/fa';
import FormAddCategory from './forms/AddCategory'
// import {ModalComp } from 'ModalComp';
export default class AddItemComp extends React.Component {
  state = {
      modal: false,
      value: ''
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
        <Button  className="float-right" id={this.props.id} color={this.props.buttonColor} onClick={this.toggle}>
        { 
          (this.props.operation=="Edit")? <FaEdit />:this.props.buttonLabel
          }
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            <FormAddCategory id={this.props.id} operation={this.props.operation} toggle={this.toggle}/>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
