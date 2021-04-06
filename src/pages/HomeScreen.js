import React, { useEffect, useState } from "react";
import networkRequest from "../helpers/networkRequest";
import People from "../components/People";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    networkRequest("/api/users")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const loadPeople = () => {
    networkRequest("/api/users")
      .then((result) => setUsers((users) => [...users, ...result.data]))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button onClick={loadPeople}>Load More People</button>
      <ul>
        <People users={users} />
      </ul>
    </div>
  );
};

export default Home;
