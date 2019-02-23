import React, { Component } from 'react';
import { Link, Router } from "@reach/router";
import AdminPanel from './components/AdminPanel';



class App extends Component {
 
 state={
  value:"Default",
  selectValue:2,
  opt:[
    [1,"one"],
    [2,"two"],
    [3,"three"]
  ]
}; 
 setSelectValue=(event)=>{
  this.setState({
    SelectValue:event.target.value
  });
 }
  render() {
    return (
      <Router>
        <AdminPanel path="/admin"></AdminPanel>
        <SelectBox
        value={this.state.selectValue} 
        onChange={this.setSelectValue} 
        opt={this.state.opt}
        />
    </Router>
    );
  }
}

export default App;
