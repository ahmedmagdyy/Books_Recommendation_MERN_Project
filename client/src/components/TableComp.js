import React from "react";
import { Table } from "reactstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "reactstrap";
import AddItemComp from "./AddItemComp";
export default class TableComp extends React.Component {
  state = {};
  deleteItem = path => {
    console.log(path.split("/")[1]);
    fetch("http://localhost:5000/" + path, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.props.deleteItem(path.split("/")[1], this.props.tab);
      })
      .catch(error => {
        console.log(error);
      });
  };
  formatDate = date => {
    date = date.substring(0, 10);
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  };
  render() {
    let i = 0;
    let rows = this.props.rows;
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            {this.props.cols.map((key, index) => {
              return <th key={index}>{key}</th>;
            })}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => {
            return (
              <tr key={row._id}>
                <th scope="row"> {++i}</th>
                {this.props.cols.map((key, index) => {
                  if (key === "photo")
                    return (
                      <td key={index}>
                        <img style={{ width: 60, height: 60 }} src={row[key]} />
                      </td>
                    );
                  else if (key === "author_name" && row["author_id"][0])
                    return (
                      <td key={index}>
                        {row["author_id"][0].first_name +
                          " " +
                          row["author_id"][0].last_name}
                      </td>
                    );
                  else if (key === "category_name" && row["category_id"][0])
                    return <td key={index}>{row["category_id"][0].name}</td>;
                  else if (key === "birth_date" && row["birth_date"])
                    return <td key={index}>{this.formatDate(row[key])}</td>;
                  return <td key={index}>{row[key]}</td>;
                })}
                <td>
                  <AddItemComp
                    id={row._id}
                    operation="Edit"
                    submitBt={"Edit " + this.props.tab}
                    addCat={this.addItemList}
                    itemType={this.props.itemType}
                    title={"Edit " + this.props.tab}
                  />
                  <Button
                    className="float-right"
                    onClick={() =>
                      this.deleteItem(this.props.itemType + "/" + row._id)
                    }
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
