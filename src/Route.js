import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from 'react';
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route exact path="/" component = {Login} />  
      <Route exact path="/register" component = {Register} />  
      <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;