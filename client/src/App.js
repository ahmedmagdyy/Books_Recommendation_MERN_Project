import React, { Component } from "react";
import { Link, Router } from "@reach/router";
import UserPage from "./components/UserPage";
import Home from "./components/Home";
import Book_ID from "./components/bookID";
import AdminPanel from "./components/AdminPanel";
import BooksPage from "./components/books/BooksPage";
import "./App.css";
import AuthorBooks from "./components/authorID";
import CategoriesPage from "./components/AllCategories";
class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <AdminPanel path="/admin" />
        <UserPage path="/user" />
        <BooksPage path="/books" />
        <BooksPage path="/cat/:id" />
        <Book_ID path="/books/:id" />
        <AuthorBooks path="/authors/:id" />
        <CategoriesPage path="/cat" />
      </Router>
    );
  }
}

export default App;
