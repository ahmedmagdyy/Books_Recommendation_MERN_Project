import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
export default class Dropdownlist extends Component {
  render() {
    return (
      <Dropdown
        style={{
          "margin-left": "60px",
          "margin-top": "10px",
          "margin-bottom": "20px",
        }}
      >
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Book Status
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">read</Dropdown.Item>
          <Dropdown.Item href="#">reading</Dropdown.Item>
          <Dropdown.Item href="#">want to read</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
