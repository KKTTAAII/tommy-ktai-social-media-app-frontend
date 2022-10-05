import React from "react";
import ImageCrossFading from "../Signup&Login/ImageCrossFading";
import { Link } from "react-router-dom";
import "../css/ResetPassword.css";

const ResetPassword = () => {
  return (
    <div className="Resetpassword-main-container">
      <div className="Resetpassword-container">
        <div className="Resetpassword-decorationBox">
          <ImageCrossFading />
        </div>
        <div className="Resetpassword-textBox">
          <div className="Resetpassword-head">Check your email</div>
          <div className="Resetpassword-second-head">
            We sent a password reset link to the provided email
          </div>

          <div className="Resetpassword-button-container">
            <button className="Resetpassword-button"><Link className="Resetpassword-back-to-login-link" to={`/login`}>Back to Log in</Link></button>
          </div>

          <div className="Resetpassword-back-to-login-container">
            Didn't receive the email?
            <Link
              className="Resetpassword-back-to-forgotpassword-link"
              to={`/forgotpassword`}
            >
              Click to resend
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
