import React, { useState } from "react";
import "./NewTodoForm.css";
import { v4 } from "uuid";

const NewTodoForm = ({ createTodo }) => {
  const [task, setTask] = useState("");

  const handleChange = (evt) => {
    setTask(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createTodo({ task, id: v4(), completed: false });
    setTask("");
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">New Todo</label>
      <input
        type="text"
        placeholder="New Todo"
        id="task"
        name="task"
        value={task}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
  );
};

// export default class NewTodoForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { task: "" }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(evt) {
//     this.setState({
//       [evt.target.name]: evt.target.value
//     });
//   }
//   handleSubmit(evt) {
//     evt.preventDefault();
//     this.props.createTodo({...this.state, id: v4(), completed: false});
//     this.setState({task: ""});
//   }
//   render() {
//     return (
//       <form className="NewTodoForm" onSubmit={this.handleSubmit}>
//         <label htmlFor="task">New Todo</label>
//         <input
//           type="text"
//           placeholder='New Todo'
//           id="task"
//           name="task"
//           value={this.state.task}
//           onChange={this.handleChange}
//         />
//         <button>Add Todo</button>
//       </form>
//     )
//   }
// }

export default NewTodoForm;
