import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  componentWillUnmount() {
    console.log("Component will unmount")
  }
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleUpdate(evt) {
    evt.preventDefault();
    //take new task data and pass up to parent
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.task);
    console.log(this.props.task);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleToggle(evt) {
    this.props.toggleTodo(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
          <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
            <input
              type='text'
              value={this.state.task}
              name='task'
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
      );
    } else {
      result = (
          <li className='Todo-task' onClick={this.handleToggle}>
            {this.props.task}
          </li>
      );
    }
    return (
      <div>
        {result}
        <div className='Todo-buttons'>
          <button onClick={this.toggleForm}>
            <i className='fas fa-pen' />
          </button>
          <button onClick={this.handleRemove}>
            <i className='fas fa-trash' />
          </button>
        </div>
        </div>
    );
  }
}