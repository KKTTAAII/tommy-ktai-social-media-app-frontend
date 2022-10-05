import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Signup from "../Signup&Login/Signup";
import Login from "../Signup&Login/Login";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import ResetPassword from "../ForgotPassword/ResetPassword";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route exact path="/resetpassword">
          <ResetPassword />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AllRoutes;
