import React, { Component } from 'react';
import SelectBox from "./components/selectbox.js";
class App extends Component {
state={
  selectValue:2,
  checked:true,
  opt:[
    [1,"one"],
    [2,"two"],
    [3,"three"]
  ]
};
setValue=(event)=>{
 this.setState({
   value:event.target.value
 });
}
setSelectValue=(event)=>{
  this.setState({
    SelectValue:event.target.value
  });
 }
 
  render() {
  return (
      <div className ='App'>
  <SelectBox
  value={this.state.selectValue} 
  onChange={this.setSelectValue} 
  opt={this.state.opt}
  />
    </div>
      
    );
  }
}

export default App;
