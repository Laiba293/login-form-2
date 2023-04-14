import React, { useState } from "react";
import "./MultipleInputs.css";

const Login = () => {
  const [userMultiinputs, setUserMultiinputs] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserMultiinputs({ ...userMultiinputs, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = (e) => {
    e.preventDefault();
    setUserMultiinputs({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div class="content">
        <div class="text">Login</div>
        <form onSubmit={handleSubmit}>
          <div class="field">
            <label htmlFor="username" className="hello">
              Email
            </label>
            <input
              type="email"
              autoComplete="off"
              value={userMultiinputs.email}
              onChange={handleInput}
              name="email"
              id="email"
            />
          </div>

          <div class="field">
            <label htmlFor="username" className="hello">
              password
            </label>
            <input
              type="password"
              autoComplete="off"
              value={userMultiinputs.password}
              onChange={handleInput}
              name="password"
              id="password"
            />
          </div>

          <button onClick={handleClick}>Login</button>

          <div class="foot">
            <a>Already have an account?</a>
            <a href="/MultipleInputs" class="in">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
