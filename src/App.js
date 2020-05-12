import React from "react";

//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/Signup";
import CreateProject from "./components/projects/CreateProject";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
