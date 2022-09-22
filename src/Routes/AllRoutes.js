import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Signup from "../Signup&Login/Signup";
import Login from "../Signup&Login/Login";

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
      </Switch>
    </BrowserRouter>
  );
};

export default AllRoutes;
