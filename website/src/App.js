import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./configs/routes";

export default function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, idx) => {
          return (
            <Route
              exact={true}
              key={idx}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
}
