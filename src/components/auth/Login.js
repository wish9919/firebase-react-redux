import React, { Component } from "react";

import { connect } from "react-redux";
import { signIn } from "../../store/actions/AuthActions";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isLoading: false,
    errorMessage: null,
  };

  componentDidUpdate(nextProps) {
    const { auth } = this.props;
    if (nextProps.auth !== auth) {
      this.setState({ errorMessage: auth.authError, isLoading: false });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    this.setState({
      isLoading: true,
    });
    const { email, password } = this.state;
    const creds = { email, password };
    const { signIn } = this.props;
    e.preventDefault();

    signIn(creds);
  };

  render() {
    const { isLoading } = this.state;
    const { auth } = this.props;
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
          <div style={{ color: "red" }}>{auth.authError}</div>
          <div style={{ color: "#292929", fontSize: 12 }}>{auth.error}</div>
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
  // console.log(state);
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
