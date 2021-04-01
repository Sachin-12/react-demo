import React from "react";

const People = (props) => {
  return (
    <div>
      <p>Lets make some friends</p>
      {props.users.map((user) => {
        return (
          <>
            <p>{user.first_name}</p>
            <img src={user.avatar} alt="your_pic" />
          </>
        );
      })}
    </div>
  );
};

export default People;
