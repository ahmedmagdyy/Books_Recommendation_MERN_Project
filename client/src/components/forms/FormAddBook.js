import React from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Input ,Label} from 'reactstrap';
import AdminPanelHOC from '../../HOC/AdminPanelHoc';
// import {ModalComp } from 'ModalComp';
 class FormAddBook extends React.Component {
  state = {
      bookName: '',
      categorySelect: 'Category',
      categoryList : [],  //"Economic","Sport","Drama"
      authorSelect: 'Author A',
      authorList : ["Author A","Author B","Author C"],
      photo : '',
      
    };

  handlePhotoChange(e) {
      this.setState({photo:e.target.files[0]});
  }
  handleBookNameChange = (event)=>{
        this.setState({bookName:event.target.value});
      }
  handeCategoryChange = (event)=>{
        this.setState({categorySelect:event.target.value});
      }
  handeAuthorChange = (event)=>{
        this.setState({authorSelect:event.target.value});
      }
  // addSubmitForm = (e)=> {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('bookName',this.state.bookName);
  //   formData.append('category',this.state.categorySelect);
  //   formData.append('author',this.state.authorSelect);
  //   formData.append('photo',this.state.file);
    
  //   // const config = {
  //   //     headers: {
  //   //         'content-type': 'multipart/form-data'
  //   //     }
  //   // };
  //   // axios.post("/upload",formData,config)
  //   //     .then((response) => {
  //   //         alert("The file is successfully uploaded");
  //   //     }).catch((error) => {
  //   // });
  //   fetch('http://localhost:5000/book',formData, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     },
  //      body:  formData
  //   }).then((res) => res.json())
  //   .then((data) =>  console.log(res.json()))
  //   .catch((err)=>console.log(err));
  //   this.props.toggle();
  //   };
  
  editSubmitForm = (e)=> {
        e.preventDefault();
        fetch('http://localhost:5000/cat', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:  JSON.stringify({
            _id :this.props.id,
            bookName: this.state.bookName
        })
        }).then((res) => res.json())
        .then((data) =>  {console.log("EDITED");this.props.editItemList(data,"Category")})
        .catch((err)=>console.log(err));
        this.props.toggle();
    };

  componentWillMount(){
    let catArr = this.props.categories.map(item=>item.name);
    this.setState({
      categoryList: catArr
    });
    console.log("HELLO");
    console.log(this.props.catArr);
    console.log(this.props.categories);
    console.log(this.state.categoryList);
    
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
                    <Label >Book Name</Label>
                    <Input type="text" name="bookName" value={this.state.bookName} />
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