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

  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/create-test">
          {loggedIn ? <CreateTest profileId={decoded}/> :  <Redirect to="/" />}
          </Route>
          <Route exact path="/">
          {loggedIn ? <Profile /> : <Main />}
          </Route>
          <Route path="/login">
          {loggedIn ? <Redirect to="/" />: <Login />}
            {/* {true ? <Login /> : <Redirect to="/auth" />} */}
          </Route>
          <Route path="/register">
          {loggedIn ? <Redirect to="/" />: <Register />}
            {/* {true ? <Register /> : <Redirect to="/auth" />} */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
