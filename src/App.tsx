import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./pages/login/index";

import Dragon from "./pages/dragon/index";
import GlobalStyle from "./components/GlobalStyles/styles";
import DragonsList from "./pages/dragonsList/index";

const App = (props: any) => {
  let routes = (
    <Switch>
      <Route path="/" exact component={Login} />
      <Redirect to="/" />
    </Switch>
  );

  if (props.isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route
          path="/dragon/:id"
          render={(props: any) => <Dragon {...props} />}
        />
        <Route path="/list" exact component={DragonsList} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">{routes}</header>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};

export default withRouter(connect(mapStateToProps, null)(App));
