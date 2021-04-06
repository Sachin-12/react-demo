import React, { useState } from "react";
import { Link } from "react-router-dom";
import route from "../routes/route";

const NavBar = (props) => {
  let [isAuthenticated, setIsAuthenticated] = useState(true);
  if (isAuthenticated) {
    return (
      <>
        <div className="nav-container">
          <Link to={route.home}>Home</Link>
          <Link to={route.friends}>Friends</Link>
          <p class="sign-out">Sign out</p>
        </div>
        <hr />
      </>
    );
  }
  return null;
};

export default NavBar;
