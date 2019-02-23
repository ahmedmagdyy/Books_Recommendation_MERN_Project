import React from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Input ,Label} from 'reactstrap';
import categoryHOC from '../../HOC/categoryHoc';
// import {ModalComp } from 'ModalComp';
 class FormAddCategory extends React.Component {
  state = {
      bookName: '',
      categorySelect: 'Category',
      categoryList : ["Economic","Sport","Drama"],
      authorSelect: 'Author A',
      authorList : ["Author A","Author B","Author C"]
    };
  handleBookNameChange = (event)=>{
        this.setState({bookName:event.target.value});
      }
  handeCategoryChange = (event)=>{
        this.setState({categorySelect:event.target.value});
      }
  handeAuthorChange = (event)=>{
        this.setState({authorSelect:event.target.value});
      }
  addSubmitForm = (e)=> {
    e.preventDefault();
    fetch('http://localhost:5000/cat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
       body:  JSON.stringify({
        bookName: this.state.bookName
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
            bookName: this.state.bookName
        })
        }).then((res) => res.json())
        .then((data) =>  {console.log("EDITED");this.props.editItemList(data,"Category")})
        .catch((err)=>console.log(err));
        this.props.toggle();
    };
//   loadCategory = ()=> {
//     fetch('http://localhost:5000/cat/list', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }).then((res) => res.json())
//     .then((data) =>  {
        

//     })
//     .catch((err)=>console.log(err));
// }
  componentWillMount(){
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
                    <Input type="file" name="file" id="exampleFile" />
                    </FormGroup>
                    <FormGroup>
                    <Input type="text" onChange={this.handleValueChange} value={this.state.value} />
                    </FormGroup>
                    <FormGroup>
                    <Button color="primary">{this.props.operation} Book</Button>
                    {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
                    </FormGroup>
            </Form>
        )}
  }

export default categoryHOC(FormAddCategory);