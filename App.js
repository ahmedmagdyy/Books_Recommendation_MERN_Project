import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AgeComponent from "./components/agecomponent";
import UserList from "./components/userlist"; 
import Welcome from "./components/welcome";
import Hello from "./components/hello";
import List from "./components/lists";
import LifeCycleExample from "./components/lifecycleexample";
import { Button } from 'reactstrap';
import Task from "./components/task";
import CreateTask from "./components/createtask";
import SelectBox from "./components/selectbox.js";
//////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////

class App extends Component {
//  state=
//   {
//     newTask:"",
//     todos:
//     [
//      {text:"kungufu",du:30} ,
//      {text:"reading",du:20},
//      {text:"cycling",du:10},
//      {text:"PHP",du:5},
//      {text:"MYSQL",du:2},
//      {text:"React",du:1}
//     ] 
//   };
//   DeleteTask=(index)=>{
//     const todos=[...this.state.todos];
//     todos.splice(index,1);
//     this.setState({todos});
//   //  console.log(index);
//   }
//   update=(event)=>{
//   this.setState({
//     newTask:event.target.value
//   });

//   }

//   addTask=()=>{
//      const todos=[...this.state.todos];
//      todos.push({text:this.state.newTask});
//      this.setState({todos,newTask:''});
//   }
state={
  value:"Default",
  selectValue:2,
  checked:true,
  No:0,
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
 
 setChecked=(event)=>{
   
  this.setState({
     checked:event.target.checked,
     
   })
  //  this.state.No;
  //  this.state.checked=event.target.value
 }
  render() {
    // const age=30;
    // let users=[
    //   {id:1,name:"abdu",age:30},
    //   {id:2,name:"miod",age:20},
    //   {id:3,name:"ali",age:25}
    // ];

    // let guests=[
    //   {id:1,name:"ahmed",age:30},
    //   {id:2,name:"omar",age:20},
    // ];

  return (
      
      // <Hello/>
      // <Test/>
      // </div>
      <div className ='App'>

{/* ///////////////////////////////////////////////////////////////////// */}
  <input value={this.state.value} onChange={this.setValue}/>
  <p>{this.state.value}</p>
  <hr/>
  <textarea value={this.state.value} onChange={this.setValue}/>
  <hr/>
  
  <SelectBox
  value={this.state.selectValue} 
  onChange={this.setSelectValue} 
  opt={this.state.opt}
  />
  {/* <select value={this.state.selectValue} onChange={this.setSelectValue}>
    <option value="1">one</option>
    <option value="2">two</option>
    <option value="3">three</option>
  </select> */}
  <br/>
  <label>CheckBox
    <input type="checkbox" checked={this.state.checked} onChange={this.setChecked}/>
  </label>
  {/* <p>{this.state.No}</p> */}
{/* ///////////////////////////////////////////////////////////////////// */}


{/* ///////////////////////////////////////////////////////////////////// */}
{/* <CreateTask update={this.update} add={this.addTask} value={this.state.newTask}/> */}
    {/* <input name="add" onChange={this.update} value={this.state.newTask} />
    <button onClick={this.addTask}>
      Add Task
    </button> */}
    {/* <ul>
{this.state.todos.map((todo,index)=><Task 
 key={index}
 todos={todo}
 DeleteTask={()=>this.DeleteTask(index)}
 />)}  
    </ul>; */}
    
{/* ///////////////////////////////////////////////////////////////////// */}
{/* ///////////////////////////////////////////////////////////////////// */}
      {/* <AgeComponent age={age}/>
      <AgeComponent age={4}/>
      <UserList users={users}/>
      <UserList users={guests}/>
       */}
{/* ///////////////////////////////////////////////////////////////////// */}
      {/* Welcome from app
      <hr/>
      <Hello name="Abdu" lname="Qnauy"/>
      <hr/>
      <Welcome name="Abdu">Description</Welcome>
      <hr/>
      <List />
      <hr/>
      <LifeCycleExample /> */}

      
      {/* <Button color="primary">primary</Button>{' '}
      <Button color="secondary">secondary</Button>{' '}
      <Button color="success">success</Button>{' '}
      <Button color="info">info</Button>{' '}
      <Button color="warning">warning</Button>{' '}
      <Button color="danger">danger</Button>{' '}
      <Button color="link">link</Button> */}
   
    </div>
      
    );
  }
}

export default App;
