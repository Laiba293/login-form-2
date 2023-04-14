import React from "react";
import { Route, Switch } from "react-router-dom";
import MultipleInputs from "./Component/MultipleInputs";
import Login from "./Component/Login";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/MultipleInputs">
          <MultipleInputs />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
      </Switch>
    </>
  );
};
export default App;
