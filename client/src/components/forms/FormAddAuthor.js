import React from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Input ,Label} from 'reactstrap';
import AdminPanelHOC from '../../HOC/AdminPanelHoc';

 class FormAddAuthor extends React.Component {
  state = {
      first_name: '',
      last_name:'',
      photo:'',
      birth_date:'',
      description:''
    };

    handlePhotoChange = (event) => {
        this.setState({photo:event.target.files[0]});
    }
    handledescriptionChange= (event) => {
        this.setState({description:event.target.value});
    }
    handleDateOfBirth = (event)=>{
        this.setState({birth_date:event.target.value});
      }
    handleFnameChange = (event)=>{
        this.setState({first_name:event.target.value});
      }
    handleLnameChange = (event)=>{
        this.setState({last_name:event.target.value});
      }
      editSubmitForm = (e)=> {
        e.preventDefault();
        const formData = new FormData();
        formData.append('_id',this.props.id);
        formData.append('birth_date',this.state.birth_date);
        formData.append('first_name',this.state.first_name);
        formData.append('last_name',this.state.last_name);
        formData.append('description',this.state.description);
        if(this.state.photo)
          formData.append('photo',this.state.photo);
        fetch('http://localhost:5000/authors', {
              method: 'PUT',
              header:{
                // "Content-Type":"application/json"
              },
              body: formData
          }).then((res) => res.json())
          .then((data) =>  this.props.editItemList(data,"Author"))
          .catch((err)=>console.log(err));
          this.props.toggle();
          }
    addSubmitForm = (event)=> {
        event.preventDefault();
        console.log("Adding author request");
        const formData = new FormData();
        formData.append('birth_date',this.state.birth_date);
        formData.append('first_name',this.state.first_name);
        formData.append('last_name',this.state.last_name);
        formData.append('description',this.state.description);
        formData.append('photo',this.state.photo);
    
      fetch('http://localhost:5000/authors', {
        method: 'POST',
        headers: {
          // 'Content-Type': 'multipart/form-data'
        },
        body: formData
      }).then((res) => res.json())
      .then((data) =>  this.props.addItemList(data,"Author"))
      .catch((err)=>console.log(err));
      this.props.toggle();
      };
    formatDate=(date)=> {
      date = date.substring(0,10);
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      const ret = [year, month, day].join('-');
      console.log(ret);
      return ret;
  }
    componentDidMount(){
      if(this.props.operation==="Edit"){
      const author = this.props.authors.filter(item =>(item._id===this.props.id))[0];
      console.log(author);
        this.setState({
          first_name: author.first_name,
          last_name:author.last_name,
          birth_date:this.formatDate(author.birth_date).toString(),
          description:author.description
        })
      }
    }
  render() {
    return (
            <Form onSubmit={(this.props.operation!=="Edit")?this.addSubmitForm:this.editSubmitForm}>
                    <FormGroup>
                    <Label >First Name</Label>
                    <Input type="text" name="first_name"  onChange={this.handleFnameChange} value={this.state.first_name} />
                    </FormGroup>
                    <FormGroup>
                    <Label >Last Name</Label>
                    <Input type="text" name="last_name" onChange={this.handleLnameChange} value={this.state.last_name} />
                    </FormGroup>
                    <FormGroup>
                    <Label >descriptionription</Label>
                    <Input type="textarea" name="description" onChange={this.handledescriptionChange} value={this.state.description} />
                    </FormGroup>
                    <FormGroup>
                    <Label >Date of Birth</Label>
                    <Input type="date" name="dateOfBirth" onChange={this.handleDateOfBirth} value={this.state.dateOfBirth} />
                    </FormGroup>            
                    <FormGroup>
                    <Label>Photo</Label>
                    <Input type="file" name="photo" onChange={this.handlePhotoChange} />
                    </FormGroup>
                    <FormGroup>
                    <Button color="primary">{this.props.operation} Author</Button>
                    </FormGroup>
            </Form>
        )}
  }

export default AdminPanelHOC(FormAddAuthor);