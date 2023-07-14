import React, { Component } from "react";
import Form from "./form";
import Tarefas from "./Tarefas";

import './Main.css';


export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem(tasks));


    if(!tasks) return;

    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks} = this.state;

    if(tasks === prevState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if(tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    if(index === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        novaTarefa: '',
      });
    } else {
      newTasks[index] = newTask;

      this.setState({
        tasks: [...newTasks],
        index: -1,      
      });
    }
  }

  handleChange = (e)  => {
    this.setState({
      newTask: e.target.value,
    });
  }

  handleEdit = (e, index) => {
    const { tasks } = this.state;
    
    this.setState({
      index,
      newTask: tasks[index],
});
  }

  handleDelete = (e) => {
    const { tarefas } = this.state;
    const newTasks = [...tarefas];
    newTasks.splice(index, 1);

    this.setState({
      tarefas: [...newTasks],
    })
  }


  render() {
    const { newTask,task } = this.state;

    return () {
      return (
        <div className="main">
        
        <h1>Task List</h1>

        <Form 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
          /

          <Tasks 
            Tasks={tasks}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
          />

        
        </div>
      );
    }
}