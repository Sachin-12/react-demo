import React, { useEffect, useState } from "react";
import networkRequest from "../helpers/networkRequest";
import People from "./PeopleScreen";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    networkRequest("/api/users")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <p>Home page</p>
      <People users={users} />
    </div>
  );
};

export default Home;
