import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FaEdit } from 'react-icons/fa';
import FormAddCategory from './forms/FormAddCategory'
import FormAddBook from './forms/FormAddBook'
import FormAddAuthor from './forms/FormAddAuthor'
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
    let form;
    const itemType = this.props.itemType ;
    if(itemType== "cat"){
      form = <FormAddCategory id={this.props.id} operation={this.props.operation} toggle={this.toggle}/>
    }
    else if(itemType =="book") form = <FormAddBook id={this.props.id} operation={this.props.operation} toggle={this.toggle}/>
    else form = <FormAddAuthor id={this.props.id} operation={this.props.operation} toggle={this.toggle}/>
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
           {form} 
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
