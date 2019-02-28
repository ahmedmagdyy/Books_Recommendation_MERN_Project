import React, { Component } from "react";
import { Link, Router } from "@reach/router";
import UserPage from './components/UserPage';
import Home from './components/Home'
import AdminPanel from "./components/AdminPanel";
import BooksPage from "./components/books/BooksPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/"/>
        <AdminPanel path="/admin"/>
        <UserPage path="/user" />
        <BooksPage path="/books" />
      </Router>
    );
  }
}

export default App;
