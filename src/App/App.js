import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Users from "../scenes/Users/Users";
import Posts from "../scenes/Posts/Posts";
import NotFound from "../scenes/NotFound/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/users" />
          </Route>
          <Route exact path="/users" component={Users} />
          <Route exact path="/:id/posts" component={Posts} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
