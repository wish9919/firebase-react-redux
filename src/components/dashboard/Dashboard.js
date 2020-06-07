import React, { Component } from "react";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import TodoList from "../projects/TodoList";
import Notifications from "./Notifications";
import { deleteTodo } from "../../store/actions/TodoActions";

class Dashboard extends Component {
  render() {
    const { todos, actions, auth, notifications } = this.props;
    // console.log(notifications);
    return (
      <div className="dashboard container">
        <div className="row ">
          <div className="col s12 m6">
            {todos ? (
              <TodoList todos={todos} actions={actions} user={auth.uid} />
            ) : (
              <div style={{ padding: 40 }} className="center-align">
                <div className="preloader-wrapper active">
                  <div className="spinner-layer spinner-red-only">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications user={auth.uid} notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.firestore.ordered.todos,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      deleteTodo: (todo) => dispatch(deleteTodo(todo)),
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: `todos`,
      orderBy: ["createdAt", "desc"],
    },
    {
      collection: "notifications",
      orderBy: ["time", "desc"],
      limit: 5,
    },
  ])
)(Dashboard);
