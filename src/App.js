import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import CreateTest from "./components/CreateTest";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import PassTest from "./components/PassTest";
import TestResult from "./components/TestResult";

import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  const cookie = Cookies.get('auth-token')
  // console.log(admin)
  if (cookie) {
    var decoded = jwt_decode(cookie);

    console.log(decoded);
  }
  console.log(!!cookie)
  const loggedIn = cookie ? true: false

  const [newTestId, setnewTestId] = React.useState(0);

  const sendnewTestIdToParent = (index) => {
    // the callback. Use a better name
    setnewTestId(index);
  };


  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/create-test">
          {loggedIn ? <CreateTest profileId={decoded} sendnewTestIdToParent={sendnewTestIdToParent}/> :  <Redirect to="/" />}
          </Route>
          <Route exact path="/">
          {loggedIn ? <Profile profileId={decoded} /> : <Main />}
          </Route>
          <Route path="/login">
          {loggedIn ? <Redirect to="/" />: <Login />}
            {/* {true ? <Login /> : <Redirect to="/auth" />} */}
          </Route>
          <Route path="/register">
          {loggedIn ? <Redirect to="/" />: <Register />}
            {/* {true ? <Register /> : <Redirect to="/auth" />} */}
          </Route>
          {/*<Route path="/new-test/:id">*/}
          {/*{loggedIn ? <NewTest newTestId={newTestId} /> : <Redirect to="/" />}*/}
          {/*</Route>*/}
          <Route path="/test/:id">
            <PassTest/>
          </Route>
          <Route path="/test-result/:id">
            <TestResult/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
