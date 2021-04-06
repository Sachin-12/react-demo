import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import route from "./routes/route";
import NavBar from "./components/NavBar";
import Home from "./pages/HomeScreen";
import Login from "./pages/LoginScreen";
import Friends from "./pages/FriendsScreen";
import PrivateRoute from "./components/PrivateRoute";
import People from "./components/People";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={route.login} component={Login} />
          <PrivateRoute path={route.home} component={Home} />
          <PrivateRoute path={route.friends} component={Friends} />
          <PrivateRoute path={route.people} component={People} />
        </Switch>
      </Router>
    </div>
  );
}
