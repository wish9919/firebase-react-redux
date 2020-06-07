import React from "react";

//router
import { Link } from "react-router-dom";

//signed in links
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

import { connect } from "react-redux";

const Navbar = (props) => {
  const { auth, profile } = props;

  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo left hide-on-small-only">
            Wish TODO
          </Link>
          {links}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
