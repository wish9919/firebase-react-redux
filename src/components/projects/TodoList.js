import React from "react";

import { Link } from "react-router-dom";
import TodoSummary from "./TodoSummary";

const TodoList = ({ todos }) => {
  return (
    <div className="project-list section">
      {
        todos &&
          todos.map((todo) => {
            return (
              <Link key={todo.id} to={`/todo/` + todo.id}>
                <TodoSummary todo={todo} />;
              </Link>
            );
          })
        // projects.map((project) => {
        //   return (
        //     <Link key={project.id} to={`/project/` + project.id}>
        //       <ProjectSummary project={project} />;
        //     </Link>
        //   );
        // })
      }
    </div>
  );
};

export default TodoList;
