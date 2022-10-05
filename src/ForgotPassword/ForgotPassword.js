import React, { useState } from "react";
import ImageCrossFading from "../Signup&Login/ImageCrossFading";
import "../css/ForgotPassword.css";
import { toggleButtonClasses } from "../helpers/helpers";
import { Link, useHistory } from "react-router-dom";

const INITIAL_EMAIL = "";

const ForgotPassword = () => {
  const [email, setEmail] = useState(INITIAL_EMAIL);
  const [isInvalid, setIsinvalid] = useState(false);
  const history = useHistory();

  const handleChange = e => {
    const { value } = e.target;
    setEmail(value);

    const isFilled =
      document.querySelector(".Forgotpassword-input").value !== ""
        ? true
        : false;
    const button = document.querySelector("button");

    isFilled ? setIsinvalid(true) : setIsinvalid(false);
    toggleButtonClasses(isFilled, true, button, "Forgotpassword");
  };

  const handleSubmit = e => {
    e.preventDefault();
    setEmail(INITIAL_EMAIL);
    if (!isInvalid) {
      history.push("/resetpassword");
    }
  };

  return (
    <div className="Forgotpassword-main-container">
      <div className="Forgotpassword-container">
        <div className="Forgotpassword-decorationBox">
          <ImageCrossFading />
        </div>
        <div className="Forgotpassword-formBox">
          <div className="Forgotpassword-head">Forgot Password?</div>
          <div className="Forgotpassword-second-head">
            No worries, we will send you reset instructions
          </div>
          <form className="Forgotpassword-form">
            <div className="Forgotpassword-input-container">
              <label htmlFor="email" className="Forgotpassword-label">
                Email
              </label>
              <input
                className="Forgotpassword-input"
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={email}
                placeholder="user@user.com"
                onChange={handleChange}
              ></input>
            </div>

            <div className="Forgotpassword-button-container">
              <button className="Forgotpassword-button" disabled>
                Reset password
              </button>
            </div>
          </form>
          <div className="Forgotpassword-back-to-login-container">
            <Link className="Forgotpassword-back-to-login-link" to={`/login`}>
              Back to log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
