import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  toggleButtonClasses,
  validateSignupForm,
  checkWarning,
} from "../helpers/helpers";
import "../css/Signup.css";
import ImageCrossFading from "./ImageCrossFading";

const INITIAL_STATE = {
  name: "",
  password: "",
  email: "",
  profile_picture: "",
  profile: "",
  joined_date: "",
};

const Signup = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [showPassword, setShowPassword] = useState(false);
  const [isInvalid, setIsInvalid] = useState(true);
  const currentDate = moment().format("DD-MM-YYYY");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));

    //enable and disable signup button
    const inputs = document.querySelectorAll(".Signup-input");
    const button = document.querySelector("button");
    const inputArray = Array.from(inputs);
    const isAllFilled = inputArray.every(item => item.value !== "");

    //validate the input
    const nameWarning = document.querySelector(".Signup-name-warning");
    const emailWarning = document.querySelector(".Signup-email-warning");
    const passwordWarning = document.querySelector(".Signup-password-warning");

    isAllFilled ? setIsInvalid(false) : setIsInvalid(true);
    const warning = validateSignupForm(name, value);

    if (name === "name") {
      nameWarning.innerText = warning;
    } else if (name === "email") {
      emailWarning.innerText = warning;
    } else {
      passwordWarning.innerText = warning;
    }

    //ensure no warnings before enabling the sign up button
    const allWarnings = [nameWarning, emailWarning, passwordWarning];
    const isNoWarning = checkWarning(allWarnings);
    toggleButtonClasses(isAllFilled, isNoWarning, button, "Signup");
  };

  const handleSubmit = e => {
    e.preventDefault();
    formData.joined_date = currentDate;
    setFormData(INITIAL_STATE);

    if (!isInvalid) {
      //.....function to interact with backend route
      //will have to show an element saying that an email to activate account has been sent
    }else{
      //error handling
    }
  };

  return (
    <div className="Signup-main-container">
      <div className="Signup-container">
        <div className="Signup-decorationBox">
          <ImageCrossFading />
        </div>
        <div className="Signup-formBox">
          <div className="Signup-head">Sign up</div>
          <div className="Signup-second-head">
            Already have an account?
            <Link to={`/login`} className="Signup-link">
              Sign in
            </Link>
          </div>
          <form className="Signup-form" onSubmit={handleSubmit}>
            <div className="Signup-input-container">
              <label htmlFor="name" className="Signup-label">
                Name
              </label>
              <input
                className="Signup-input"
                type="name"
                id="name"
                name="name"
                autoComplete="name"
                value={formData.name}
                placeholder="helloWorld"
                onChange={handleChange}
              ></input>
              <small className="Signup-name-warning"></small>
            </div>

            <div className="Signup-input-container">
              <label htmlFor="email" className="Signup-label">
                Email
              </label>
              <input
                className="Signup-input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="user@user.com"
                onChange={handleChange}
              ></input>
              <small className="Signup-email-warning"></small>
            </div>

            <div className="Signup-input-container">
              <label htmlFor="password" className="Signup-label">
                Password
              </label>
              <input
                className="Signup-input"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                autoComplete="new-password"
                value={formData.password}
                placeholder="•••••••"
                onChange={handleChange}
              ></input>
              <div
                onClick={handleClickShowPassword}
                className="Signup-password-show"
              >
                {showPassword ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </div>

              <small className="Signup-password-warning"></small>
            </div>

            <div className="Signup-button-container">
              <button className="Signup-button" disabled>
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
