import React from 'react';
import { Table } from 'reactstrap';
import { FaEdit ,FaTrash } from 'react-icons/fa';
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
      this.props.deleteItem(path.split("/")[1]);
    }).catch((error) =>{
    console.log(error);
    });
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
                           
            this.props.rows.map((row)=>{
              return  (  <tr key={row.id}>
                        <th scope="row">{row.id}</th>
                        <td>{row.name}</td>
                        <td>
                          <button><FaEdit /></button>
                          <button onClick={()=>this.deleteItem(this.props.itemType+"/"+row.id)} ><FaTrash /></button>
                        </td>
                      </tr>);
            })
          }
        </tbody>
      </Table>
    );
  }
}