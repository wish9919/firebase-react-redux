import React from "react";

//router
import { BrowserRouter as Router, Switch } from "react-router-dom";

//components
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import TodoDetails from "./components/projects/TodoDetails";
import Login from "./components/auth/Login";

import CreateTodo from "./components/projects/CreateTodo";
import ProtectedRoutes from "./components/routes/Protected.Routes";
import AuthRoutes from "./components/routes/Auth.Routes";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <ProtectedRoutes exact path="/" component={Dashboard} />
          <ProtectedRoutes path="/todo/:id" component={TodoDetails} />
          <AuthRoutes path="/login" component={Login} />
          <AuthRoutes path="/signup" component={Signup} />
          <ProtectedRoutes path="/create" component={CreateTodo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
