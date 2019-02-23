import React from 'react';
import { Table } from 'reactstrap';
import { FaEdit ,FaTrash } from 'react-icons/fa';
import { Button } from 'reactstrap';
import AddItemComp from './AddItemComp';
export default class TableComp extends React.Component {
  state = {


  }
  deleteItem = (path)=>{
    console.log(path.split("/")[1]);
    fetch('http://localhost:5000/'+path, {
      method: 'DELETE'
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.props.deleteItem(path.split("/")[1],this.props.tab);
    }).catch((error) =>{
    console.log(error);
    });
  }

  render() {
    let i=0;
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            {
              this.props.cols.map ((key,index)=>{
                return (<th key={index}>{key}</th>)
              })
            }
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {          
            this.props.rows.map((row)=>{
              return  (  <tr key={row._id}>
                        <th scope="row">   {++i}</th>
                        {
                          Object.keys(row).map((key,index) => {
                            if(!(key==="__v"|| key==="_id"|| key==="id"))
                              return(<td key={index}>{row[key]}</td>)
                            else return (null); 
                          })
                        }
                        <td>
                          {/* <button><FaEdit /></button> */}
                          <AddItemComp  id={row._id} operation="Edit" submitBt={"Edit "+this.props.tab} addCat={this.addItemList} itemType={this.props.itemType} title={"Edit "+this.props.tab} />
                          <Button className="float-right" onClick={()=>this.deleteItem(this.props.itemType+"/"+row._id)} ><FaTrash /></Button>
                        </td>
                      </tr>);
            })
          }
        </tbody>
      </Table>
    );
  }
}