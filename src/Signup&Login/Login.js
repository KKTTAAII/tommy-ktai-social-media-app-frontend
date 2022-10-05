import React, { useState } from "react";
import ImageCrossFading from "./ImageCrossFading";
import { Link } from "react-router-dom";
import "../css/Login.css";
import { toggleButtonClasses } from "../helpers/helpers";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [isInvalid, setIsInvalid] = useState(true);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));

    //enable and disable signup button
    const inputs = document.querySelectorAll(".Login-input");
    const button = document.querySelector("button");
    const inputArray = Array.from(inputs);
    const isAllFilled = inputArray.every(item => item.value !== "");
    toggleButtonClasses(isAllFilled, true, button, "Login");
    isAllFilled ? setIsInvalid(false) : setIsInvalid(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormData(INITIAL_STATE);

    if (!isInvalid) {
      //.....function to interact with backend route
    } else {
      //error handling
    }
  };

  return (
    <div className="Login-main-container">
      <div className="Login-container">
        <div className="Login-decorationBox">
          <ImageCrossFading />
        </div>
        <div className="Login-formBox">
          <div className="Login-head">Log in</div>
          <div className="Login-second-head">
            Don't have an account?
            <Link to={`/signup`} className="Login-link">
              Sign up
            </Link>
          </div>
          <form className="Login-form" onSubmit={handleSubmit}>
            <div className="Login-input-container">
              <label htmlFor="email" className="Login-label">
                Email
              </label>
              <input
                className="Login-input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="user@user.com"
                onChange={handleChange}
                required
              ></input>
              {/* <small className="Signup-email-warning"></small> */}
            </div>

            <div className="Login-input-container">
              <label htmlFor="password" className="Login-label">
                Password
              </label>
              <input
                className="Login-input"
                type="password"
                id="password"
                name="password"
                autoComplete="new-password"
                value={formData.password}
                placeholder="•••••••"
                onChange={handleChange}
                required
              ></input>
              {/* <small className="Signup-password-warning"></small> */}
            </div>

            <div className="Login-password-options">
              <div className="Login-password-remember">
                <label class="Login-password-switch">
                  <input type="checkbox" className="checkbox"></input>
                  Remember me?
                </label>
              </div>
              <div className="Login-password-forgot">
                <Link className="Login-password-forgot-link">
                  Forgot Password?
                </Link>
              </div>
            </div>

            <div className="Login-button-container">
              <button className="Login-button" disabled>
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
