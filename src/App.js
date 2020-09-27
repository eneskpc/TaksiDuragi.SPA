import "./index.scss";
import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";
import "@fortawesome/fontawesome-free/scss/regular.scss";
import "animate.css/animate.min.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateLayout from "./Components/PrivateLayout";
import CallerList from "./Components/CallerList";
import Dashboard from "./Components/Dashboard";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <AppRoute
            path="/portal"
            layout={PrivateLayout}
            exact
            component={Dashboard}
          />
          <AppRoute
            path="/portal/cagri-listesi"
            layout={PrivateLayout}
            exact
            component={CallerList}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
