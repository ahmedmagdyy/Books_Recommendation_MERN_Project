import React from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Input ,Label} from 'reactstrap';
import AdminPanelHOC from '../../HOC/AdminPanelHoc';
// import {ModalComp } from 'ModalComp';
 class FormAddBook extends React.Component {
    state = {
        name: '',
        categorySelect: '',
        categoryList : [],  //"Economic","Sport","Drama"
        authorSelect: '',
        authorList : [],
        photo : '',
        description: '',
        photo:'',
        
      };
      handlePhotoChange=(event)=> {
        this.setState({photo:event.target.files[0]});
      }
      handleDescriptionChange= (event)=>{
      this.setState({description:event.target.value});
      }
      handleNameChange = (event)=>{
          this.setState({name:event.target.value});
        }
      handeCategoryChange = (event)=>{
          this.setState({categorySelect:event.target.value});
        }
      handeAuthorChange = (event)=>{
          this.setState({authorSelect:event.target.value});
        }
      addSubmitForm = (event)=> {
        event.preventDefault();
        const catItem = this.props.categories.filter(item=>(item.name===this.state.categorySelect))[0];
        const authItem = this.props.authors.filter(item=>(item.first_name+" "+item.last_name===this.state.authorSelect))[0];
        const formData = new FormData();
        formData.append('name',this.state.name);
        formData.append('category_id',catItem._id);
        formData.append('author_id',authItem._id);
        formData.append('description',this.state.description);
        formData.append('photo',this.state.photo);
        fetch('http://localhost:5000/books', {
        method: 'POST',
        headers: {
        },
          body: formData
        }).then((res) => res.json())
        .then((data) =>  {console.log(data); this.props.addItemList(data,"Book")})
        .catch((err)=>console.log(err));
        this.props.toggle();
        };
  
        editSubmitForm = (e)=> {
          e.preventDefault();
          const catItem = this.props.categories.filter(item=>(item.name===this.state.categorySelect))[0];
          const authItem = this.props.authors.filter(item=>(item.first_name+" "+item.last_name===this.state.authorSelect))[0];
          const formData = new FormData();
          formData.append('_id',this.props.id);
          formData.append('name',this.state.name);
          formData.append('category_id',catItem._id);
          formData.append('author_id',authItem._id);
          formData.append('description',this.state.description);
          if(this.state.photo)
            formData.append('photo',this.state.photo);
            console.log("form");
            for (var key of formData.entries()) {
              console.log(key[0] + ', ' + key[1])
            }
          fetch('http://localhost:5000/books', {
                method: 'PUT',
                header:{
                },
                body: formData
            }).then((res) => res.json())
            .then((data) =>  this.props.editItemList(data,"Book"))
            .catch((err)=>console.log(err));
            this.props.toggle();
            }

    componentWillMount(){
      const catArr = this.props.categories.map(item=>item.name);
      const authorArr = this.props.authors.map(item=>(item.first_name+" "+item.last_name));
      this.setState({
        categoryList: catArr,
        authorList: authorArr,
        categorySelect: catArr[0]?catArr[0]:'',
        authorSelect: authorArr[0]?authorArr[0]:'',
      });

      if(this.props.operation==="Edit"){
        const book = this.props.books.filter(item =>(item._id===this.props.id))[0];
        this.setState({
          name: book.name,
          description:book.description
        })
      }
    }
  render() {
    return (
            <Form onSubmit={(this.props.operation!=="Edit")?this.addSubmitForm:this.editSubmitForm}>
                  <FormGroup>
                    <Label >Book Name</Label>
                    <Input type="text" name="name" onChange={this.handleNameChange}  value={this.state.name} />
                    </FormGroup>
                    <FormGroup>
                    <Label >Category</Label>
                    <Input type="select" name="select" onChange={this.handeCategoryChange} value={this.state.categorySelect}>
                        {
                            this.state.categoryList.map(item=>{
                               return( <option>{item}</option>)
                            })
                        }
                    </Input>
                    </FormGroup>
                    <FormGroup>
                    <Label>Author</Label>
                    <Input type="select" name="select" onChange={this.handeAuthorChange} value={this.state.authorSelect}>
                        {
                            this.state.authorList.map(item=>{
                               return( <option>{item}</option>)
                            })
                        }
                    </Input>
                    </FormGroup>
                    <FormGroup>
                    <Label >description</Label>
                    <Input type="textarea" name="description" onChange={this.handleDescriptionChange} value={this.state.description} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleFile">Photo</Label>
                    <Input type="file" name="file" name="myImage" onChange={this.handlePhotoChange} />
                    </FormGroup>
                    <FormGroup>
                    <Button color="primary">{this.props.operation} Book</Button>
                    {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
                    </FormGroup>
            </Form>
        )}
  }

export default AdminPanelHOC(FormAddBook);