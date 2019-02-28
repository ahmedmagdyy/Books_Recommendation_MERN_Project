import React, { Component } from "react";
import { Link, Router } from "@reach/router";
import Book_ID from "./components/bookID";
import UserPage from "./components/UserPage";
import AdminPanel from "./components/AdminPanel";
import "./App.css";
import BooksPage from "./components/books/BooksPage";
import AuthorBooks from "./components/authorID";
import CategoriesPage from "./components/AllCategories";
class App extends Component {
  render() {
    return (
      <Router>
        <AdminPanel path="/admin" />
        <UserPage path="/user" />
        <BooksPage path="/books" />
        <BooksPage path="/category/:id" />
        <Book_ID path="/book/:id" />
        <AuthorBooks path="/author/:id" />
        <CategoriesPage path="/allcategory" />
      </Router>
    );
  }
}

export default App;
