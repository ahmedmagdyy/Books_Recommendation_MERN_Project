import React, { Component } from "react";
import Catbox from "./Catbox";

export default class Categories extends Component {
  render() {
    return (
      <div>
        {this.props.categories.map(category => {
          return (
            <Catbox categoryName={category.name} categoryId={category._id} />
          );
        })}
      </div>
    );
  }
}
