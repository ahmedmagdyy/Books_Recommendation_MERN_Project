import React from 'react';
import { Table } from 'reactstrap';

export default class BookTable extends React.Component {
  // getItem = ()=>{
  //   fetch('http://localhost:5000/user', {
  //     method: 'GET'
  //   }).then((response) => response.json())
  //   .then((responseJson) => {
  //     console.log(responseJson);
  //     this.props.getItem(this.props.tab);
  //   }).catch((error) =>{
  //   console.log(error);
  //   });
  // }
  render() {
    let i=0;
    let rows =this.props.rows ;
    console.log(rows);  
    return (
      <Table>
        <thead>
        {          
          <tr >
            {/* <th scope="row">{++i}</th> */}
            {
              this.props.cols.map ((item,index)=>{                                 
                  return (<td key={index}>{item}</td>)
              })
            }
          </tr>
          }
        </thead>
        <tbody>
          {     
            rows.map((row)=>{
              const author_id = (row["book_id"])?row["book_id"].author_id:null;
              console.log("AUTHOR IDIDDIDIDIDIDI")
              console.log(author_id);
              return(
              <tr key={row._id}>
  
                  {/* <th scope="row">{++i}</th> */}
                  {
                    this.props.cols.map ((key,index)=>{
                      if(key === "photo")
                        return(<td key={index}><img style={{width:60,height:60}} src={row[key]}></img></td>)
                      else if (key === "name" && row["book_id"])
                        return(<td key={index}>{row["book_id"].name}</td>)  
                      else if (key === "author" && author_id)
                        return(<td key={index}>{author_id[0].first_name+" "+author_id[0].last_name}</td>)
                      else if (key === "avg_rate" && row["book_id"])
                        return(<td key={index}>{row["book_id"].rate}</td>)
                      else if (key === "rating" && row["book_id"])
                        return(<td key={index}>{row["book_id"].user_rating}</td>)
                      return(<td key={index}>{row[key]}</td>)      
                    })
                  }
              </tr>);
            })
          }
        </tbody>
      </Table>
    );
  }
}