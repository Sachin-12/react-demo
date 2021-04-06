import React from "react";
import { v4 as UUIDv4 } from "uuid";

const People = (props) => {
  return (
    <>
      {/* <p>Lets make some friends</p> */}
      {props.users.map((user) => {
        return (
          <li className="user" key={UUIDv4()}>
            <img src={user.avatar} alt="your_pic" />
            <div>
              <p>{user.first_name}</p>
              {/* add user as friend using onClick */}
              <button>Add Friend</button>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default People;
