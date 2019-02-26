import React, { Component } from "react";
import { Link, Router } from "@reach/router";


import UserPage from './components/UserPage';

import AdminPanel from "./components/AdminPanel";
import "./App.css";
import BooksPage from "./components/books/BooksPage";

class App extends Component {
  render() {
    return (
      <Router>
<<<<<<< HEAD
        <AdminPanel path="/admin"></AdminPanel>     
=======
        <AdminPanel path="/admin"></AdminPanel>
        <UserPage path="/user"></UserPage>
        <BooksPage path="/books" />
>>>>>>> 0fb62ebd478b8f93097b2e75459fccaa6a82d767
      </Router>
    );
  }
}

export default App;
