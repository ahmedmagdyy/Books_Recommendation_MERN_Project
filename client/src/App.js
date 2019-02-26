import React, { Component } from "react";
import { Link, Router } from "@reach/router";
import AdminPanel from "./components/AdminPanel";
import "./App.css";
import BooksPage from "./components/books/BooksPage";

class App extends Component {
  render() {
    return (
      <Router>
        <AdminPanel path="/admin" />
        <BooksPage path="/books" />
      </Router>
    );
  }
}

export default App;
