import React, { useEffect } from "react";
import networkRequest from "../helpers/networkRequest";

const Home = () => {
  useEffect(() => {
    const data = networkRequest("/api/users");
  }, []);
  return (
    <div>
      <p>Welcome to Home page</p>
    </div>
  );
};

export default Home;
