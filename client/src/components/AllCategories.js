import React, { Component } from "react";
import Categories from "./category";
import NavbarUser from "./NavbarUser";
export default class CategoriesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: "1", name: "horror" },
        { id: "2", name: "Romance" },
        { id: "3", name: "Action" },
        { id: "4", name: "Drama" },
        { id: "5", name: "Suspense" },
        { id: "6", name: "Fantasy" },
        { id: "7", name: "Historical" },
        { id: "8", name: "Biography" },
        { id: "9", name: "Space" },
        { id: "10", name: "Art" },
      ],
    };
  }
  render() {
    return (
      <div>
        <div>
          <NavbarUser />
        </div>
        <div>{<Categories categories={this.state.categories} />}</div>
      </div>
    );
  }
}
