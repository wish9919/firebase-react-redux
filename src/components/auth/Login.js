import React, { Component } from "react";

import { connect } from "react-redux";
import { signIn } from "../../store/actions/AuthActions";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isLoading: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { email, password } = this.state;
    const creds = { email, password };
    const { signIn } = this.props;
    e.preventDefault();
    this.setState(
      {
        isLoading: true,
      },
      () => {
        signIn(creds);
      }
    );
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">
              {!isLoading ? (
                "Login"
              ) : (
                <div className="preloader-main">
                  <div className="preloader-wrapper small active">
                    <div className="spinner-layer white-spinner spinner-blue-only">
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
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
