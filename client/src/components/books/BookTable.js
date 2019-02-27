import React from 'react';
import { Table } from 'reactstrap';
// import { FaEdit ,FaTrash } from 'react-icons/fa';
// import { Button } from 'reactstrap';
// import AddItemComp from './AddItemComp';
export default class BookTable extends React.Component {
  state = {


  }
//   getItem = (path)=>{
//     console.log(path.split("/")[1]);
//     fetch('http://localhost:5000/'+path, {
//       method: 'GET'
//     }).then((response) => response.json())
//     .then((responseJson) => {
//       console.log(responseJson);
//       this.props.getItem(path.split("/")[1],this.props.tab);
//     }).catch((error) =>{
//     console.log(error);
//     });
//   }
  render() {
    let i=0;
    let rows =this.props.rows ;
    return (
      <Table>
        <thead>
          <tr>
            <th>Cover</th>
            {
              this.props.cols.map ((key,index)=>{
                return (<th key={index}>{key}</th>)
              })
            }
            <th>Name</th>
            {
              this.props.cols.map ((key,index)=>{
                return (<th key={index}>{key}</th>)
              })
            }
            <th>Author</th>
            {
              this.props.cols.map ((key,index)=>{
                return (<th key={index}>{key}</th>)
              })
            }
            <th>Avg Rate</th>
            {
              this.props.cols.map ((key,index)=>{
                return (<th key={index}>{key}</th>)
              })
            }
            <th>Rating</th>
            {
              this.props.cols.map ((key,index)=>{
                return (<th key={index}>{key}</th>)
              })
            }
            <th>Shelve</th>
            {
              this.props.cols.map ((key,index)=>{
                return (<th key={index}>{key}</th>)
              })
            }
          </tr>
        </thead>
        <tbody>
          {          
            rows.map((row)=>{
              return(<tr key={row._id}>
                        <th scope="row">{++i}</th>
                        {
                          this.props.cols.map ((key,index)=>{
                              if(key==="photo") 
                                return (<td key={index}><img style={{width:60,height:60}} src={row[key]}></img></td>)
                              else if (key==="name")
                                return (<td key={index}><a href={row[key]}></a></td>)    
                              else if (key==="author")
                                return (<td key={index}><a href={row[key]}></a></td>)                                    
                              return (<td key={index}>{row[key]}</td>)
                          })
                        }
                        <td>
                          avg_rate component
                        </td>
                        <td>
                          rate component
                        </td>
                        <td>
                          shelve component
                        </td>
                    </tr>);
            })
          }
        </tbody>
      </Table>
    );
  }
}