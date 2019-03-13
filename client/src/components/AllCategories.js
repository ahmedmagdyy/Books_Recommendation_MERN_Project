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
  componentWillMount() {
   fetch('http://localhost:5000/cat/', {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => {
          this.setState({ categories:data });
    })
   
  }
  render() {
    const { categories } = this.state;
    return (
      (!categories)?null:
      <div>
        <div>
          <NavbarUser />
        </div>
        <div style={{'margin-top' : '100px'}}>
        {<Categories categories={this.state.categories} />}</div>
      </div>
    );
  }
}
