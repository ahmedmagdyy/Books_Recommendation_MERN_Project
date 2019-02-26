import React, { Component } from 'react';
import { Link, Router } from "@reach/router";
import AdminPanel from './components/AdminPanel';
import UserPage from './components/UserPage';


class App extends Component {
 
  render() {
    return (
      <Router>
        <AdminPanel path="/admin"></AdminPanel>
        <UserPage path="/user"></UserPage>
      </Router>
    );
  }
}

export default App;
