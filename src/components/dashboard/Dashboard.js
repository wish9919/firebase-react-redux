import React, { Component } from "react";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import TodoList from "../projects/TodoList";
import Notifications from "./Notifications";

class Dashboard extends Component {
  render() {
    const { todos } = this.props;

    return (
      <div className="dashboard container">
        <div className="row ">
          <div className="col s12 m6">
            {todos ? (
              <TodoList todos={todos} />
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
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    todos: state.firestore.ordered.todos,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "todos", orderBy: ["createdAt", "desc"] }])
)(Dashboard);
