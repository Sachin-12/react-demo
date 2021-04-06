import React, { useState } from "react";
import InputField from "./InputField";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // sample
  const user = "demo@zf.com";
  const pwd = "test!123";
  // add authentication
  return (
    <form className="form-container">
      <label>Username :</label>
      <input
        type="text"
        onChange={(e) => setUsername(e.value)}
        placeholder="enter your username"
        value={username}
      />
      <label>Password :</label>
      <input
        type="text"
        onChange={(e) => setPassword(e.value)}
        placeholder="enter your password"
        value={password}
      />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default Form;
