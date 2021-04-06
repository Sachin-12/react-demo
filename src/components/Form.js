import React, { useState } from "react";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // sample
  const user = "demo@zf.com";
  const pwd = "test!123";
  // add authentication
  const authenticate = () => {
    if (username === user && password === pwd) return true;
  };
  return (
    <form className="form-container">
      <div>
        <label>Username :</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="enter your username"
          value={username}
        />
      </div>
      <div>
        <label>Password :</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter your password"
          value={password}
        />
      </div>
      <button class="sign-in" onClick={authenticate} type="submit">
        Sign in
      </button>
    </form>
  );
};

export default Form;
