import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import route from "./routes/route";
import NavBar from "./components/NavBar";
import Home from "./pages/HomeScreen";
import People from "./pages/PeopleScreen";
import Login from "./pages/LoginScreen";
import Friends from "./pages/FriendsScreen";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path={route.home} component={Home}></Route>
          <Route path={route.login} component={Login}></Route>
          <Route path={route.friends} component={Friends}></Route>
          <Route path={route.people} component={People}></Route>
        </Switch>
      </Router>
    </div>
  );
}
