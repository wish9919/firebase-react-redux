import React from "react";

//router
import { BrowserRouter as Router, Switch } from "react-router-dom";

//components
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/Signup";
import CreateProject from "./components/projects/CreateProject";
import AuthRoutes from "./components/routes/Auth.Routes";
import ProtectedRoutes from "./components/routes/Protected.Routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <ProtectedRoutes exact path="/" component={Dashboard} />
          <ProtectedRoutes path="/project/:id" component={ProjectDetails} />
          <AuthRoutes path="/login" component={Login} />
          <AuthRoutes path="/signup" component={SignUp} />
          <ProtectedRoutes path="/create" component={CreateProject} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
