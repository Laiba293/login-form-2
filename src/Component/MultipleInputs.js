import React, { useState } from "react";
import "./MultipleInputs.css";

const MultipleInputs = () => {
  const [userMultiinputs, setUserMultiinputs] = useState({
    username: "",
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
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div className="content">
        <div className="text">Sign Up</div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="username" className="hello">
              Name
            </label>
            <input
              type="text"
              autoComplete="off"
              value={userMultiinputs.username}
              onChange={handleInput}
              name="username"
              id="name"
            />
          </div>

          <div className="field">
            <label htmlFor="email" className="hello">
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

          <div className="field">
            <label htmlFor="password" className="hello">
              Password
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

          <button onClick={handleClick}>Sign Up</button>

          <div className="foot">
            <a>Already have an account?</a>
            <a href="./Login" className="in">
              Sign In
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default MultipleInputs;
