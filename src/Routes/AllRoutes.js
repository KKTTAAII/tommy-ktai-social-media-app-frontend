import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Signup from "../Signup&Login/Signup";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AllRoutes;
