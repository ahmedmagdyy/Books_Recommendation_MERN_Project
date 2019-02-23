import React, { Component } from 'react';
import { Link, Router } from "@reach/router";
import AdminPanel from './components/AdminPanel';



class App extends Component {
 
  render() {
    return (
      <Router>
        <AdminPanel path="/admin"></AdminPanel>
      </Router>
    );
  }
}

export default App;
