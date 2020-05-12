import React from "react";

//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
