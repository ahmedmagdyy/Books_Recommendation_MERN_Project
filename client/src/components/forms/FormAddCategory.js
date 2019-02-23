import React from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
import categoryHOC from '../../HOC/categoryHoc';
// import {ModalComp } from 'ModalComp';
 class FormAddCategory extends React.Component {
  state = {
      value: ''
    };

    handleValueChange = (event)=>{
        this.setState({value:event.target.value});
      }
  addSubmitForm = (e)=> {
    e.preventDefault();
    fetch('http://localhost:5000/cat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
       body:  JSON.stringify({
        name: this.state.value
       })
    }).then((res) => res.json())
    .then((data) =>  this.props.addItemList(data,"Category"))
    .catch((err)=>console.log(err));
    this.props.toggle();
  };
  editSubmitForm = (e)=> {
    e.preventDefault();
    fetch('http://localhost:5000/cat', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
       body:  JSON.stringify({
        _id :this.props.id,
        name: this.state.value
       })
    }).then((res) => res.json())
    .then((data) =>  {console.log("EDITED");this.props.editItemList(data,"Category")})
    .catch((err)=>console.log(err));
    this.props.toggle();
  };
  componentDidMount(){
    if(this.props.operation==="Edit"){
    const nameValue = this.props.categories.filter(item =>(item._id===this.props.id))[0].name;
    console.log(this.props.categories);
    console.log(this.props.id);
      this.setState({value:nameValue})
    }
  }
  render() {
    return (
            <Form onSubmit={(this.props.operation!=="Edit")?this.addSubmitForm:this.editSubmitForm}>
                    <FormGroup>
                    <Input type="text" onChange={this.handleValueChange} value={this.state.value} />
                    </FormGroup>
                    <FormGroup>
                    <Button color="primary">{this.props.operation} Category</Button>
                    {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
                    </FormGroup>
            </Form>
        )}
  }

export default categoryHOC(FormAddCategory);