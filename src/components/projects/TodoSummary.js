import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
// import

const TodoSummary = ({ todo, actions }) => {
  // console.log({ todo, actions });
  return (
    <div className="card z-depth-0 pink todo-summary">
      <div className="card-content white-text text-darken-3">
        <span className="card-title">{todo.title}</span>
        <p>Posted by {`${todo.authorFirstName} ${todo.authorLastName}`}</p>
        <p className="black-text">
          {moment(todo.createdAt.toDate()).calendar()}
        </p>
        <div className="right">
          <Link
            to={`/todo/` + todo.id}
            className="waves-effect waves-light btn blue"
          >
            <i className="material-icons right">remove_red_eye</i>View
          </Link>
          <span
            onClick={() => actions.deleteTodo(todo.id)}
            className="waves-effect waves-light btn mr4"
          >
            <i className="material-icons right">close</i>Delete
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoSummary;
